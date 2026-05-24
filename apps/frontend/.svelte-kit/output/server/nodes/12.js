import * as server from '../entries/pages/system-admin-dashboard/add-parent/_page.server.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/system-admin-dashboard/add-parent/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/system-admin-dashboard/add-parent/+page.server.js";
export const imports = ["_app/immutable/nodes/12.PPHYFj9z.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/DEAEsUb4.js","_app/immutable/chunks/Wy4jd99D.js","_app/immutable/chunks/apFby0wk.js","_app/immutable/chunks/DzGGZi78.js","_app/immutable/chunks/BdyktWce.js","_app/immutable/chunks/D6Gu_bJq.js","_app/immutable/chunks/Dq0B8LfS.js","_app/immutable/chunks/C3heoEtZ.js","_app/immutable/chunks/D7JJ4kuK.js"];
export const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/12.DraQDlDT.css"];
export const fonts = [];
