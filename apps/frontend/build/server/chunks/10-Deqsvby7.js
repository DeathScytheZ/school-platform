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
const component = async () => component_cache ??= (await import('./_page.svelte-CWHSBsSG.js')).default;
const server_id = "src/views/system-admin-dashboard/+page.server.js";
const imports = ["_app/immutable/nodes/10.DnOB2ZC7.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/C-WEktKh.js","_app/immutable/chunks/DV-SbBOm.js","_app/immutable/chunks/GG0HJ46a.js","_app/immutable/chunks/5EQo4MA4.js","_app/immutable/chunks/BctPicw9.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/10.BiqZt-El.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-Deqsvby7.js.map
