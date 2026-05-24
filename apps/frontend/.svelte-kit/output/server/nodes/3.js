import * as server from '../entries/pages/teacher-dashboard/_layout.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/teacher-dashboard/+layout.server.js";
export const imports = ["_app/immutable/nodes/3.CUMrxa3P.js","_app/immutable/chunks/CEASMcnP.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/apFby0wk.js"];
export const stylesheets = [];
export const fonts = [];
