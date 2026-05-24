import * as server from '../entries/pages/system-admin-dashboard/users/_page.server.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/system-admin-dashboard/users/_page.svelte.js')).default;
export { server };
export const server_id = "src/views/system-admin-dashboard/users/+page.server.js";
export const imports = ["_app/immutable/nodes/16.CNBrrQ82.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Be3a9zSC.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/DV-SbBOm.js","_app/immutable/chunks/GG0HJ46a.js","_app/immutable/chunks/5EQo4MA4.js","_app/immutable/chunks/DziUD3Sl.js","_app/immutable/chunks/C-WEktKh.js","_app/immutable/chunks/BctPicw9.js","_app/immutable/chunks/BMGkvQ30.js","_app/immutable/chunks/BKuqSeVd.js"];
export const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/16.C4FsunZY.css"];
export const fonts = [];
