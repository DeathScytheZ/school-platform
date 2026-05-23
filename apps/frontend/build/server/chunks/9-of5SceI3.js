import { f as fail } from './index-Dwxh19rw.js';

const load = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/system-admin-dashboard/children");
    if (!response.ok) {
      return { children: [] };
    }
    const result = await response.json();
    return { children: result.children || [] };
  } catch (error) {
    console.error("Error fetching children:", error);
    return { children: [] };
  }
};
const actions = {
  createParent: async ({ request }) => {
    const formData = await request.formData();
    const payload = {
      officialId: formData.get("officialId"),
      password: formData.get("password"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      dateOfBirth: formData.get("dateOfBirth"),
      wilaya: formData.get("wilaya"),
      commune: formData.get("commune"),
      childIds: formData.getAll("childIds")
    };
    try {
      const response = await fetch("http://localhost:3000/api/system-admin-dashboard/create-parent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        return fail(response.status, { error: result.message, action: "createParent" });
      }
      return { success: true, action: "createParent" };
    } catch (error) {
      console.error("Server error creating parent:", error);
      return fail(500, { error: "Internal server error", action: "createParent" });
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-xpF-cQ4h.js')).default;
const server_id = "src/routes/system-admin-dashboard/add-parent/+page.server.js";
const imports = ["_app/immutable/nodes/9.Nn5lJPRm.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CE5cqHET.js","_app/immutable/chunks/BhusDmbJ.js","_app/immutable/chunks/DjA-N_CN.js","_app/immutable/chunks/BwgKaK4f.js","_app/immutable/chunks/CZ8B3eV_.js","_app/immutable/chunks/BgS_OdXY.js","_app/immutable/chunks/B0e3DZEQ.js","_app/immutable/chunks/B7qgeUId.js","_app/immutable/chunks/ChBzZG4G.js"];
const stylesheets = ["_app/immutable/assets/9.B0mWa4Wa.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-of5SceI3.js.map
