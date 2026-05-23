import { fail, redirect } from "@sveltejs/kit";
const load = async ({ cookies }) => {
  const isPending = cookies.get("signup-pending") === "true";
  return { isPending };
};
const actions = {
  login: async ({ request, cookies }) => {
    const formData = await request.formData();
    const payload = {
      officialId: formData.get("officialId"),
      password: formData.get("password")
    };
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        console.error(result.message);
        return fail(response.status, { error: result.message, officialId: payload.officialId });
      }
      cookies.set("token", result.token, {
        path: "/",
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60
      });
      const destination = result.role === "teacher" ? "/teacher-dashboard" : "/staff-dashboard";
      throw redirect(303, destination);
    } catch (error) {
      if (error.status === 303) throw error;
      console.error("server error", error);
      return fail(500, { error: "Internal server error", officialId: payload.officialId });
    }
  },
  signup: async ({ request, cookies }) => {
    const formData = await request.formData();
    const role = formData.get("role");
    const subject = formData.get("subject");
    const position = formData.get("position");
    const payload = {
      officialId: formData.get("officialId"),
      password: formData.get("password"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      dateOfBirth: formData.get("dateOfBirth"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      role,
      roleDetail: role === "teacher" ? subject : position
    };
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const json = await response.json();
      if (!response.ok) {
        console.error(json.message);
        return fail(response.status, { error: json.message });
      }
      cookies.set("signup-pending", "true", {
        path: "/",
        httpOnly: false,
        secure: false,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 2
      });
      return { signupSuccess: true };
    } catch (error) {
      console.error(error);
      return fail(500, { error: "Internal server error, Try again later" });
    }
  },
  newSignup: async ({ cookies }) => {
    cookies.delete("signup-pending", { path: "/" });
    console.log("true");
    return { success: true };
  }
};
export {
  actions,
  load
};
