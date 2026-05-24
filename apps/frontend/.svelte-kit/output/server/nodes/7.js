import * as server from '../entries/pages/parent-dashboard/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/parent-dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/parent-dashboard/+page.server.js";
export const imports = ["_app/immutable/nodes/7.Bfu1ZKAn.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/DEAEsUb4.js","_app/immutable/chunks/Wy4jd99D.js","_app/immutable/chunks/apFby0wk.js","_app/immutable/chunks/DzGGZi78.js","_app/immutable/chunks/BpsIBDgP.js","_app/immutable/chunks/BKuqSeVd.js","_app/immutable/chunks/C3heoEtZ.js","_app/immutable/chunks/D7JJ4kuK.js"];
export const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/7.BNhCSFWO.css"];
export const fonts = [];
