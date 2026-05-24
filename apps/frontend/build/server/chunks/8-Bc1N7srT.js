const load = async ({ fetch, parent }) => {
  const parentData = await parent();
  try {
    const response = await fetch("http://localhost:3000/api/announcements?role=staff");
    if (!response.ok) {
      return { announcements: [], profile: parentData.profile };
    }
    const result = await response.json();
    return { announcements: result.announcements || [], profile: parentData.profile };
  } catch (error) {
    console.error("Error loading staff announcements:", error);
    return { announcements: [], profile: parentData.profile };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B9NVnSuy.js')).default;
const server_id = "src/routes/staff-dashboard/+page.server.js";
const imports = ["_app/immutable/nodes/8.B475sA-V.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/DEAEsUb4.js","_app/immutable/chunks/Wy4jd99D.js","_app/immutable/chunks/apFby0wk.js","_app/immutable/chunks/DzGGZi78.js","_app/immutable/chunks/C3heoEtZ.js","_app/immutable/chunks/D7JJ4kuK.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/8.l2jkcj03.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=8-Bc1N7srT.js.map
