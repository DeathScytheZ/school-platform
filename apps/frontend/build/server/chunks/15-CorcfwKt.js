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
const component = async () => component_cache ??= (await import('./_page.svelte-D8KRdubQ.js')).default;
const server_id = "src/views/system-admin-dashboard/registration-requests/+page.server.js";
const imports = ["_app/immutable/nodes/15.C6OoFd2G.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Be3a9zSC.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/DV-SbBOm.js","_app/immutable/chunks/GG0HJ46a.js","_app/immutable/chunks/5EQo4MA4.js","_app/immutable/chunks/DziUD3Sl.js","_app/immutable/chunks/BxjNL7a9.js","_app/immutable/chunks/zGfg6ZkI.js","_app/immutable/chunks/C-WEktKh.js","_app/immutable/chunks/BctPicw9.js","_app/immutable/chunks/BKuqSeVd.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/15.DIbay7pP.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=15-CorcfwKt.js.map
