import { l as loadProfile } from './profile-Dsnd9oSw.js';

const load = async ({ fetch, locals, cookies }) => {
  const parentId = locals.user?.id || 1;
  const profile = await loadProfile(fetch, cookies, locals);
  try {
    const [dashboardResponse, announcementsResponse] = await Promise.all([
      fetch(`http://localhost:3000/api/parent/dashboard/${parentId}`),
      fetch("http://localhost:3000/api/parent/announcements")
    ]);
    const result = dashboardResponse.ok ? await dashboardResponse.json() : {};
    const announcementsResult = announcementsResponse.ok ? await announcementsResponse.json() : {};
    return {
      parentId: result.parentId || parentId,
      children: result.children || [],
      performance: result.performance || [],
      behavior: result.behavior || [],
      announcements: announcementsResult.announcements || [],
      profile
    };
  } catch (error) {
    console.error("Error loading parent dashboard:", error);
    return {
      parentId,
      children: [],
      performance: [],
      behavior: [],
      announcements: [],
      profile
    };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C8wpdk4L.js')).default;
const server_id = "src/views/parent-dashboard/+page.server.js";
const imports = ["_app/immutable/nodes/7.DkgUXtwY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/DV-SbBOm.js","_app/immutable/chunks/GG0HJ46a.js","_app/immutable/chunks/5EQo4MA4.js","_app/immutable/chunks/DziUD3Sl.js","_app/immutable/chunks/BMGkvQ30.js","_app/immutable/chunks/BKuqSeVd.js","_app/immutable/chunks/C-WEktKh.js","_app/immutable/chunks/BctPicw9.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/7.rAPSyCtm.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-BJfyKo28.js.map
