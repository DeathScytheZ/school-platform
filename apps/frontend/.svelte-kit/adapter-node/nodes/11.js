import * as server from '../entries/pages/system-admin-dashboard/add-child/_page.server.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/system-admin-dashboard/add-child/_page.svelte.js')).default;
export { server };
export const server_id = "src/views/system-admin-dashboard/add-child/+page.server.js";
export const imports = ["_app/immutable/nodes/11.jl6C0dGI.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/DV-SbBOm.js","_app/immutable/chunks/GG0HJ46a.js","_app/immutable/chunks/5EQo4MA4.js","_app/immutable/chunks/DziUD3Sl.js","_app/immutable/chunks/BxjNL7a9.js","_app/immutable/chunks/zGfg6ZkI.js","_app/immutable/chunks/Be3a9zSC.js","_app/immutable/chunks/C-WEktKh.js","_app/immutable/chunks/BctPicw9.js"];
export const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/11.D-tarmnn.css"];
export const fonts = [];
