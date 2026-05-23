import * as server from '../entries/pages/system-admin-dashboard/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/system-admin-dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/system-admin-dashboard/+page.server.js";
export const imports = ["_app/immutable/nodes/7.Qtfm_KbW.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CE5cqHET.js"];
export const stylesheets = ["_app/immutable/assets/7.BH2Lnc9r.css"];
export const fonts = [];
