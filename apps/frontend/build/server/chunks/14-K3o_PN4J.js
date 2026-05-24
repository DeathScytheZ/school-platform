import { f as fail } from './index-Dwxh19rw.js';
import { l as loadProfile } from './profile-Dsnd9oSw.js';

const load = async ({ fetch: fetch2, cookies, locals }) => {
  const profile = await loadProfile(fetch2, cookies, locals);
  try {
    const classesResponse = await fetch2("http://localhost:3000/api/system-admin-dashboard/classes");
    const classesResult = classesResponse.ok ? await classesResponse.json() : {};
    return {
      classes: classesResult.classes || [],
      profile
    };
  } catch (error) {
    console.error("Error loading class data:", error);
    return {
      classes: [],
      profile
    };
  }
};
const actions = {
  createClass: async ({ request }) => {
    const formData = await request.formData();
    const payload = {
      name: formData.get("name"),
      year: formData.get("year"),
      level: formData.get("level")
    };
    try {
      const response = await fetch("http://localhost:3000/api/system-admin-dashboard/create-class", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        return fail(response.status, { error: result.message, action: "createClass" });
      }
      return { success: true, action: "createClass" };
    } catch (error) {
      console.error("Server error creating class:", error);
      return fail(500, { error: "Internal server error", action: "createClass" });
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CMPhu1jo.js')).default;
const server_id = "src/routes/system-admin-dashboard/create-class/+page.server.js";
const imports = ["_app/immutable/nodes/14.CJ_mdf6t.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/DEAEsUb4.js","_app/immutable/chunks/Wy4jd99D.js","_app/immutable/chunks/apFby0wk.js","_app/immutable/chunks/DzGGZi78.js","_app/immutable/chunks/BdyktWce.js","_app/immutable/chunks/D6Gu_bJq.js","_app/immutable/chunks/Dq0B8LfS.js","_app/immutable/chunks/C3heoEtZ.js","_app/immutable/chunks/D7JJ4kuK.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/14.DRHYUHlP.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=14-K3o_PN4J.js.map
