import { f as fail } from './index-Dwxh19rw.js';

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

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DscxD5Kw.js')).default;
const server_id = "src/routes/system-admin-dashboard/add-child/+page.server.js";
const imports = ["_app/immutable/nodes/8.CFE2pi2w.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CE5cqHET.js","_app/immutable/chunks/BhusDmbJ.js","_app/immutable/chunks/DjA-N_CN.js","_app/immutable/chunks/BwgKaK4f.js","_app/immutable/chunks/BgS_OdXY.js","_app/immutable/chunks/B0e3DZEQ.js","_app/immutable/chunks/B7qgeUId.js"];
const stylesheets = ["_app/immutable/assets/8.WyITxhRe.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-DHS3EXsn.js.map
