import { fail } from "@sveltejs/kit";
import { l as loadProfile } from "../../../../chunks/profile.js";
const load = async ({ fetch: fetch2, cookies, locals }) => {
  const profile = await loadProfile(fetch2, cookies, locals);
  try {
    const classesResponse = await fetch2("http://localhost:3000/api/system-admin-dashboard/classes");
    const classesResult = classesResponse.ok ? await classesResponse.json() : {};
    return {
      classes: classesResult.classes || [],
      profile
    };
  } catch (error) {
    console.error("Error loading class data:", error);
    return {
      classes: [],
      profile
    };
  }
};
const actions = {
  createClass: async ({ request }) => {
    const formData = await request.formData();
    const payload = {
      name: formData.get("name"),
      year: formData.get("year"),
      level: formData.get("level")
    };
    try {
      const response = await fetch("http://localhost:3000/api/system-admin-dashboard/create-class", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        return fail(response.status, { error: result.message, action: "createClass" });
      }
      return { success: true, action: "createClass" };
    } catch (error) {
      console.error("Server error creating class:", error);
      return fail(500, { error: "Internal server error", action: "createClass" });
    }
  }
};
export {
  actions,
  load
};
