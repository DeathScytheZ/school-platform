import * as server from '../entries/pages/system-admin-dashboard/users/_page.server.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/system-admin-dashboard/users/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/system-admin-dashboard/users/+page.server.js";
export const imports = ["_app/immutable/nodes/16.CQJJ8CuJ.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Dq0B8LfS.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/DEAEsUb4.js","_app/immutable/chunks/Wy4jd99D.js","_app/immutable/chunks/apFby0wk.js","_app/immutable/chunks/DzGGZi78.js","_app/immutable/chunks/C3heoEtZ.js","_app/immutable/chunks/D7JJ4kuK.js","_app/immutable/chunks/BpsIBDgP.js","_app/immutable/chunks/BKuqSeVd.js"];
export const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/16.CCoIbssd.css"];
export const fonts = [];
