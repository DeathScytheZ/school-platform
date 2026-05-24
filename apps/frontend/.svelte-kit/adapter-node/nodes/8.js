import * as server from '../entries/pages/staff-dashboard/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/staff-dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/views/staff-dashboard/+page.server.js";
export const imports = ["_app/immutable/nodes/8.DRechUj3.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/DV-SbBOm.js","_app/immutable/chunks/GG0HJ46a.js","_app/immutable/chunks/5EQo4MA4.js","_app/immutable/chunks/DziUD3Sl.js","_app/immutable/chunks/C-WEktKh.js","_app/immutable/chunks/BctPicw9.js"];
export const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/8.C8B3rNb9.css"];
export const fonts = [];
