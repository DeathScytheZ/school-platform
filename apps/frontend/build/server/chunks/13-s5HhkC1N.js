import { f as fail } from './index-Dwxh19rw.js';
import { l as loadProfile } from './profile-Dsnd9oSw.js';

const load = async ({ fetch: fetch2, cookies, locals }) => {
  const profile = await loadProfile(fetch2, cookies, locals);
  try {
    const response = await fetch2("http://localhost:3000/api/announcements?role=admin");
    if (!response.ok) {
      return { announcements: [], profile };
    }
    const result = await response.json();
    return { announcements: result.announcements || [], profile };
  } catch (error) {
    console.error("Error loading announcements:", error);
    return { announcements: [], profile };
  }
};
const actions = {
  createGeneralAnnouncement: async ({ request }) => {
    const formData = await request.formData();
    const payload = {
      title: formData.get("title"),
      subject: formData.get("subject"),
      description: formData.get("description"),
      date: formData.get("date")
    };
    try {
      const response = await fetch("http://localhost:3000/api/announcements/general", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        return fail(response.status, { error: result.message, action: "createGeneral" });
      }
      return { success: true, action: "createGeneral" };
    } catch (error) {
      console.error("Server error creating general announcement:", error);
      return fail(500, { error: "Internal server error", action: "createGeneral" });
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-2kAx_8fN.js')).default;
const server_id = "src/routes/system-admin-dashboard/announcements/+page.server.js";
const imports = ["_app/immutable/nodes/13.CrIYLqyt.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/DEAEsUb4.js","_app/immutable/chunks/Wy4jd99D.js","_app/immutable/chunks/apFby0wk.js","_app/immutable/chunks/DzGGZi78.js","_app/immutable/chunks/BdyktWce.js","_app/immutable/chunks/D6Gu_bJq.js","_app/immutable/chunks/Dq0B8LfS.js","_app/immutable/chunks/C3heoEtZ.js","_app/immutable/chunks/D7JJ4kuK.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/13.DlApE6dd.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=13-s5HhkC1N.js.map
