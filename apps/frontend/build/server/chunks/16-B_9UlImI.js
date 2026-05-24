import { l as loadProfile } from './profile-Dsnd9oSw.js';

const load = async ({ fetch, cookies, locals }) => {
  return {
    profile: await loadProfile(fetch, cookies, locals)
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CQiOs3Hf.js')).default;
const server_id = "src/routes/system-admin-dashboard/users/+page.server.js";
const imports = ["_app/immutable/nodes/16.CQJJ8CuJ.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Dq0B8LfS.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/DEAEsUb4.js","_app/immutable/chunks/Wy4jd99D.js","_app/immutable/chunks/apFby0wk.js","_app/immutable/chunks/DzGGZi78.js","_app/immutable/chunks/C3heoEtZ.js","_app/immutable/chunks/D7JJ4kuK.js","_app/immutable/chunks/BpsIBDgP.js","_app/immutable/chunks/BKuqSeVd.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/16.CCoIbssd.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=16-B_9UlImI.js.map
