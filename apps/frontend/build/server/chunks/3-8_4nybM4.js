import { r as redirect } from './index-Dwxh19rw.js';

const load = async ({ locals }) => {
  if (!locals.user) throw redirect(302, "auth");
  if (locals.user.role !== "teacher") throw redirect(302, "/");
  return {
    welcomeMessage: `Weclome to the dashboard, Teacher #${locals.user.id}`
  };
};

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-UxsTmhKc.js')).default;
const server_id = "src/routes/teacher-dashboard/+layout.server.js";
const imports = ["_app/immutable/nodes/3.BCQpoCpB.js","_app/immutable/chunks/Daadc6H0.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CE5cqHET.js","_app/immutable/chunks/BwgKaK4f.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=3-8_4nybM4.js.map
