import { f as fail } from './index-Dwxh19rw.js';
import { l as loadProfile } from './profile-Dsnd9oSw.js';

const load = async ({ fetch: fetch2, cookies, locals }) => {
  const profile = await loadProfile(fetch2, cookies, locals);
  try {
    const response = await fetch2("http://localhost:3000/api/system-admin-dashboard/children");
    if (!response.ok) {
      return { children: [], profile };
    }
    const result = await response.json();
    return { children: result.children || [], profile };
  } catch (error) {
    console.error("Error fetching children:", error);
    return { children: [], profile };
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
      phone: formData.get("phone"),
      email: formData.get("email"),
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

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D4rLOfHk.js')).default;
const server_id = "src/routes/system-admin-dashboard/add-parent/+page.server.js";
const imports = ["_app/immutable/nodes/12.PPHYFj9z.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/DEAEsUb4.js","_app/immutable/chunks/Wy4jd99D.js","_app/immutable/chunks/apFby0wk.js","_app/immutable/chunks/DzGGZi78.js","_app/immutable/chunks/BdyktWce.js","_app/immutable/chunks/D6Gu_bJq.js","_app/immutable/chunks/Dq0B8LfS.js","_app/immutable/chunks/C3heoEtZ.js","_app/immutable/chunks/D7JJ4kuK.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/12.DraQDlDT.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=12-DTN2ihmp.js.map
