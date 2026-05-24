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

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-3sYKBgLl.js')).default;
const server_id = "src/routes/system-admin-dashboard/+page.server.js";
const imports = ["_app/immutable/nodes/10.BWNNIram.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/C3heoEtZ.js","_app/immutable/chunks/DEAEsUb4.js","_app/immutable/chunks/Wy4jd99D.js","_app/immutable/chunks/apFby0wk.js","_app/immutable/chunks/D7JJ4kuK.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/10.Cn6Ju0B9.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-Dy5Po7pX.js.map
