import { fail } from "@sveltejs/kit";
import { l as loadProfile } from "../../../../chunks/profile.js";
const load = async ({ fetch: fetch2, cookies, locals }) => {
  const profile = await loadProfile(fetch2, cookies, locals);
  try {
    const response = await fetch2("http://localhost:3000/api/system-admin-dashboard/classes");
    if (!response.ok) {
      return { classes: [], profile };
    }
    const result = await response.json();
    return { classes: result.classes || [], profile };
  } catch (error) {
    console.error("Error loading classes:", error);
    return { classes: [], profile };
  }
};
const actions = {
  createChild: async ({ request }) => {
    const formData = await request.formData();
    const payload = {
      officialId: formData.get("officialId"),
      password: formData.get("password"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      dateOfBirth: formData.get("dateOfBirth"),
      level: formData.get("level"),
      medicalCondition: formData.get("medicalCondition"),
      classId: formData.get("classId")
    };
    try {
      const response = await fetch("http://localhost:3000/api/system-admin-dashboard/create-child", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        return fail(response.status, { error: result.message, action: "createChild" });
      }
      return { success: true, action: "createChild" };
    } catch (error) {
      console.error("Server error creating child:", error);
      return fail(500, { error: "Internal server error", action: "createChild" });
    }
  }
};
export {
  actions,
  load
};
