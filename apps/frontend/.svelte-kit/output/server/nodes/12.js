import * as server from '../entries/pages/teacher-dashboard/_page.server.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/teacher-dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/teacher-dashboard/+page.server.js";
export const imports = ["_app/immutable/nodes/12.CSJf1DQS.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CE5cqHET.js"];
export const stylesheets = [];
export const fonts = [];
