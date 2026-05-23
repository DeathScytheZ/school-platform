import { f as fail } from './index-Dwxh19rw.js';

const actions = {
  approveRequest: async ({ request }) => {
    const formData = await request.formData();
    const requestId = formData.get("id");
    try {
      const response = await fetch("http://localhost:3000/api/auth/addUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "id": requestId })
      });
      const result = await response.json();
      if (!response.ok) {
        return fail(response.status, { message: result.message });
      }
      return { success: true, message: "User added successfully" };
    } catch (error) {
      return fail(500, { message: `Server communication error ${error}` });
    }
  },
  rejectRequest: async ({ request }) => {
    const formData = await request.formData();
    const requestId = formData.get("id");
    try {
      const response = await fetch("http://localhost:3000/api/auth/rejectUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "id": requestId })
      });
      const result = await response.json();
      if (!response.ok) {
        return fail(response.status, { message: result.message });
      }
      return { success: true, message: "User request rejected successfully" };
    } catch (error) {
      return fail(500, { message: `Server communication error ${error}` });
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DKzfZZHN.js')).default;
const server_id = "src/routes/system-admin-dashboard/registration-requests/+page.server.js";
const imports = ["_app/immutable/nodes/10.BA3QrUKf.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B7qgeUId.js","_app/immutable/chunks/CE5cqHET.js","_app/immutable/chunks/BhusDmbJ.js","_app/immutable/chunks/DjA-N_CN.js","_app/immutable/chunks/BwgKaK4f.js","_app/immutable/chunks/CZ8B3eV_.js","_app/immutable/chunks/BgS_OdXY.js","_app/immutable/chunks/B0e3DZEQ.js","_app/immutable/chunks/ChBzZG4G.js","_app/immutable/chunks/B08B5jt4.js"];
const stylesheets = ["_app/immutable/assets/10.IWgcfLdJ.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-BXFMEbrp.js.map
