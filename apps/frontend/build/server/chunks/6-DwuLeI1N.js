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
const component = async () => component_cache ??= (await import('./_page.svelte-BbV5IlBl.js')).default;
const server_id = "src/routes/child-dashboard/+page.server.js";
const imports = ["_app/immutable/nodes/6.CEJUgev8.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/DEAEsUb4.js","_app/immutable/chunks/Wy4jd99D.js","_app/immutable/chunks/apFby0wk.js","_app/immutable/chunks/DzGGZi78.js","_app/immutable/chunks/BpsIBDgP.js","_app/immutable/chunks/BKuqSeVd.js","_app/immutable/chunks/C3heoEtZ.js","_app/immutable/chunks/D7JJ4kuK.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/6.C7JehR7y.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-DwuLeI1N.js.map
