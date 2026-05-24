import { f as fail } from './index-Dwxh19rw.js';
import { l as loadProfile } from './profile-Dsnd9oSw.js';

const load = async ({ fetch: fetch2, cookies, locals }) => {
  return {
    profile: await loadProfile(fetch2, cookies, locals)
  };
};
const actions = {
  approveRequest: async ({ request }) => {
    const formData = await request.formData();
    const requestId = formData.get("id");
    const classId = formData.get("classId");
    try {
      const response = await fetch("http://localhost:3000/api/auth/addUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "id": requestId, classId })
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
  actions: actions,
  load: load
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BxwLywLv.js')).default;
const server_id = "src/routes/system-admin-dashboard/registration-requests/+page.server.js";
const imports = ["_app/immutable/nodes/15.Np0JSbU_.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Dq0B8LfS.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/DEAEsUb4.js","_app/immutable/chunks/Wy4jd99D.js","_app/immutable/chunks/apFby0wk.js","_app/immutable/chunks/DzGGZi78.js","_app/immutable/chunks/BdyktWce.js","_app/immutable/chunks/D6Gu_bJq.js","_app/immutable/chunks/C3heoEtZ.js","_app/immutable/chunks/D7JJ4kuK.js","_app/immutable/chunks/BKuqSeVd.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/15.C0BKmsla.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=15-Bv4xYjsX.js.map
