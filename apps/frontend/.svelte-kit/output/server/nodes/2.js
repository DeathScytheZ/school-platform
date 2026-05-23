import * as server from '../entries/pages/staff-dashboard/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/staff-dashboard/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.BCQpoCpB.js","_app/immutable/chunks/Daadc6H0.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CE5cqHET.js","_app/immutable/chunks/BwgKaK4f.js"];
export const stylesheets = [];
export const fonts = [];
