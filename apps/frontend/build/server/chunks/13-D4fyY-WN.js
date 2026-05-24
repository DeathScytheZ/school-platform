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
const component = async () => component_cache ??= (await import('./_page.svelte-DAdrNd_b.js')).default;
const server_id = "src/views/system-admin-dashboard/announcements/+page.server.js";
const imports = ["_app/immutable/nodes/13.CP1Asc_C.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/DV-SbBOm.js","_app/immutable/chunks/GG0HJ46a.js","_app/immutable/chunks/5EQo4MA4.js","_app/immutable/chunks/DziUD3Sl.js","_app/immutable/chunks/BxjNL7a9.js","_app/immutable/chunks/zGfg6ZkI.js","_app/immutable/chunks/Be3a9zSC.js","_app/immutable/chunks/C-WEktKh.js","_app/immutable/chunks/BctPicw9.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/13.JIGhcCKM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=13-D4fyY-WN.js.map
