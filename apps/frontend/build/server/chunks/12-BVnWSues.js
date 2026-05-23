import { f as fail, r as redirect } from './index-Dwxh19rw.js';

const actions = {
  login: async ({ request, cookies }) => {
    const formData = await request.formData();
    const officialId = formData.get("officialId");
    const password = formData.get("password");
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ officialId, password })
      });
      const result = await response.json();
      if (!response.ok) {
        console.error(result.message);
        return fail(response.status, { error: result.message, officialId });
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
      return fail(500, { error: "Internal server error", officialId });
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DbcxhvjL.js')).default;
const server_id = "src/routes/teacher-dashboard/+page.server.js";
const imports = ["_app/immutable/nodes/12.CSJf1DQS.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CE5cqHET.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=12-BVnWSues.js.map
