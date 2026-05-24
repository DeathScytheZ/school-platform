import { r as redirect } from './index-Dwxh19rw.js';
import { l as loadProfile } from './profile-Dsnd9oSw.js';

const load = async ({ locals, fetch, cookies }) => {
  if (!locals.user) throw redirect(302, "auth");
  if (locals.user.role !== "teacher") throw redirect(302, "/");
  return {
    welcomeMessage: `Welcome to the dashboard, Teacher #${locals.user.id}`,
    profile: await loadProfile(fetch, cookies, locals)
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
const imports = ["_app/immutable/nodes/3.CUMrxa3P.js","_app/immutable/chunks/CEASMcnP.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/apFby0wk.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=3-idMGdMEb.js.map
