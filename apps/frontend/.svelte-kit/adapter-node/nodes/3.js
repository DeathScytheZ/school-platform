import * as server from '../entries/pages/teacher-dashboard/_layout.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/views/teacher-dashboard/+layout.server.js";
export const imports = ["_app/immutable/nodes/3.BGa87IuA.js","_app/immutable/chunks/dpNEpeyK.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/5EQo4MA4.js"];
export const stylesheets = [];
export const fonts = [];
