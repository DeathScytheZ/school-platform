import * as server from '../entries/pages/staff-dashboard/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/views/staff-dashboard/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.BGa87IuA.js","_app/immutable/chunks/dpNEpeyK.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/5EQo4MA4.js"];
export const stylesheets = [];
export const fonts = [];
