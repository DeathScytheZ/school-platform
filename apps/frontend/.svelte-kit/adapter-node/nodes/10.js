import * as server from '../entries/pages/system-admin-dashboard/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/system-admin-dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/views/system-admin-dashboard/+page.server.js";
export const imports = ["_app/immutable/nodes/10.DnOB2ZC7.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/C-WEktKh.js","_app/immutable/chunks/DV-SbBOm.js","_app/immutable/chunks/GG0HJ46a.js","_app/immutable/chunks/5EQo4MA4.js","_app/immutable/chunks/BctPicw9.js"];
export const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/10.BiqZt-El.css"];
export const fonts = [];
