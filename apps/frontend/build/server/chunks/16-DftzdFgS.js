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
const component = async () => component_cache ??= (await import('./_page.svelte-BXVoL_Ar.js')).default;
const server_id = "src/views/system-admin-dashboard/users/+page.server.js";
const imports = ["_app/immutable/nodes/16.CNBrrQ82.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Be3a9zSC.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/DV-SbBOm.js","_app/immutable/chunks/GG0HJ46a.js","_app/immutable/chunks/5EQo4MA4.js","_app/immutable/chunks/DziUD3Sl.js","_app/immutable/chunks/C-WEktKh.js","_app/immutable/chunks/BctPicw9.js","_app/immutable/chunks/BMGkvQ30.js","_app/immutable/chunks/BKuqSeVd.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/16.C4FsunZY.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=16-DftzdFgS.js.map
