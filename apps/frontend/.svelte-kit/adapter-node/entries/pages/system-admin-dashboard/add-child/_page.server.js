import { fail } from "@sveltejs/kit";
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
      medicalCondition: formData.get("medicalCondition")
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
  actions
};
