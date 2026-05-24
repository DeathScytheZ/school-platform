import { f as fail, r as redirect } from './index-Dwxh19rw.js';

const load = async ({ cookies, url }) => {
  const isPending = cookies.get("signup-pending") === "true";
  return {
    isPending,
    showSignup: url.searchParams.get("mode") === "signup"
  };
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
      const destinations = {
        teacher: "/teacher-dashboard",
        staff: "/staff-dashboard",
        parent: "/parent-dashboard",
        child: "/child-dashboard",
        admin: "/system-admin-dashboard"
      };
      const destination = destinations[result.role] || "/";
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

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B5wJNcqS.js')).default;
const server_id = "src/views/auth/+page.server.js";
const imports = ["_app/immutable/nodes/5.C0QBj16a.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/DV-SbBOm.js","_app/immutable/chunks/GG0HJ46a.js","_app/immutable/chunks/5EQo4MA4.js","_app/immutable/chunks/DziUD3Sl.js","_app/immutable/chunks/BxjNL7a9.js","_app/immutable/chunks/zGfg6ZkI.js","_app/immutable/chunks/Be3a9zSC.js"];
const stylesheets = ["_app/immutable/assets/5.CwLRPVV2.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-DL3pLxCt.js.map
