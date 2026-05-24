import { l as loadProfile } from './profile-Dsnd9oSw.js';

const load = async ({ fetch, locals, cookies }) => {
  const accountId = locals.user?.id || 1;
  const profile = await loadProfile(fetch, cookies, locals);
  try {
    const response = await fetch(`http://localhost:3000/api/child/dashboard/${accountId}`);
    const result = response.ok ? await response.json() : {};
    return {
      profile,
      child: result.child || null,
      performance: result.performance || [],
      behavior: result.behavior || [],
      grades: result.grades || [],
      announcements: result.announcements || []
    };
  } catch (error) {
    console.error("Error loading child dashboard:", error);
    return {
      profile,
      child: null,
      performance: [],
      behavior: [],
      grades: [],
      announcements: []
    };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BDhOZ9AD.js')).default;
const server_id = "src/views/child-dashboard/+page.server.js";
const imports = ["_app/immutable/nodes/6.CWkitMzq.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/DV-SbBOm.js","_app/immutable/chunks/GG0HJ46a.js","_app/immutable/chunks/5EQo4MA4.js","_app/immutable/chunks/DziUD3Sl.js","_app/immutable/chunks/BMGkvQ30.js","_app/immutable/chunks/BKuqSeVd.js","_app/immutable/chunks/C-WEktKh.js","_app/immutable/chunks/BctPicw9.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/6.719ivpuy.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-Bmj5Xx3x.js.map
