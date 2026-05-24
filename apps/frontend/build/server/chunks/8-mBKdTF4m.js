const load = async ({ fetch, parent }) => {
  const parentData = await parent();
  try {
    const response = await fetch("http://localhost:3000/api/announcements?role=staff");
    if (!response.ok) {
      return { announcements: [], profile: parentData.profile };
    }
    const result = await response.json();
    return { announcements: result.announcements || [], profile: parentData.profile };
  } catch (error) {
    console.error("Error loading staff announcements:", error);
    return { announcements: [], profile: parentData.profile };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-1u1mN6Bc.js')).default;
const server_id = "src/views/staff-dashboard/+page.server.js";
const imports = ["_app/immutable/nodes/8.DRechUj3.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/DV-SbBOm.js","_app/immutable/chunks/GG0HJ46a.js","_app/immutable/chunks/5EQo4MA4.js","_app/immutable/chunks/DziUD3Sl.js","_app/immutable/chunks/C-WEktKh.js","_app/immutable/chunks/BctPicw9.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/8.C8B3rNb9.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-mBKdTF4m.js.map
