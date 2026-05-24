import * as server from '../entries/pages/system-admin-dashboard/registration-requests/_page.server.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/system-admin-dashboard/registration-requests/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/system-admin-dashboard/registration-requests/+page.server.js";
export const imports = ["_app/immutable/nodes/15.Np0JSbU_.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Dq0B8LfS.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/DEAEsUb4.js","_app/immutable/chunks/Wy4jd99D.js","_app/immutable/chunks/apFby0wk.js","_app/immutable/chunks/DzGGZi78.js","_app/immutable/chunks/BdyktWce.js","_app/immutable/chunks/D6Gu_bJq.js","_app/immutable/chunks/C3heoEtZ.js","_app/immutable/chunks/D7JJ4kuK.js","_app/immutable/chunks/BKuqSeVd.js"];
export const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/15.C0BKmsla.css"];
export const fonts = [];
