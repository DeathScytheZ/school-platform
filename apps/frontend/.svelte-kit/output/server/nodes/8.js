import * as server from '../entries/pages/system-admin-dashboard/add-child/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/system-admin-dashboard/add-child/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/system-admin-dashboard/add-child/+page.server.js";
export const imports = ["_app/immutable/nodes/8.CFE2pi2w.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CE5cqHET.js","_app/immutable/chunks/BhusDmbJ.js","_app/immutable/chunks/DjA-N_CN.js","_app/immutable/chunks/BwgKaK4f.js","_app/immutable/chunks/BgS_OdXY.js","_app/immutable/chunks/B0e3DZEQ.js","_app/immutable/chunks/B7qgeUId.js"];
export const stylesheets = ["_app/immutable/assets/8.WyITxhRe.css"];
export const fonts = [];
