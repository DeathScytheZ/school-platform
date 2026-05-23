import * as server from '../entries/pages/system-admin-dashboard/registration-requests/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/system-admin-dashboard/registration-requests/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/system-admin-dashboard/registration-requests/+page.server.js";
export const imports = ["_app/immutable/nodes/10.BA3QrUKf.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B7qgeUId.js","_app/immutable/chunks/CE5cqHET.js","_app/immutable/chunks/BhusDmbJ.js","_app/immutable/chunks/DjA-N_CN.js","_app/immutable/chunks/BwgKaK4f.js","_app/immutable/chunks/CZ8B3eV_.js","_app/immutable/chunks/BgS_OdXY.js","_app/immutable/chunks/B0e3DZEQ.js","_app/immutable/chunks/ChBzZG4G.js","_app/immutable/chunks/B08B5jt4.js"];
export const stylesheets = ["_app/immutable/assets/10.IWgcfLdJ.css"];
export const fonts = [];
