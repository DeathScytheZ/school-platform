import * as server from '../entries/pages/system-admin-dashboard/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/system-admin-dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/system-admin-dashboard/+page.server.js";
export const imports = ["_app/immutable/nodes/10.BWNNIram.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/C3heoEtZ.js","_app/immutable/chunks/DEAEsUb4.js","_app/immutable/chunks/Wy4jd99D.js","_app/immutable/chunks/apFby0wk.js","_app/immutable/chunks/D7JJ4kuK.js"];
export const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/10.Cn6Ju0B9.css"];
export const fonts = [];
