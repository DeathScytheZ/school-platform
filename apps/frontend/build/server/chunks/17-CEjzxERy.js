import { f as fail } from './index-Dwxh19rw.js';

const load = async ({ fetch: fetch2, locals }) => {
  const accountId = locals.user?.id || 1;
  try {
    const [studentsResponse, performanceResponse, behaviorResponse, gradesResponse] = await Promise.all([
      fetch2(`http://localhost:3000/api/teacher/students/${accountId}`),
      fetch2(`http://localhost:3000/api/teacher/performance/${accountId}`),
      fetch2(`http://localhost:3000/api/teacher/behavior/${accountId}`),
      fetch2(`http://localhost:3000/api/teacher/grades/${accountId}`)
    ]);
    const studentsResult = studentsResponse.ok ? await studentsResponse.json() : {};
    const performanceResult = performanceResponse.ok ? await performanceResponse.json() : {};
    const behaviorResult = behaviorResponse.ok ? await behaviorResponse.json() : {};
    const gradesResult = gradesResponse.ok ? await gradesResponse.json() : {};
    return {
      teacherId: studentsResult.teacherId || accountId,
      students: studentsResult.students || [],
      performance: performanceResult.performance || [],
      behavior: behaviorResult.behavior || [],
      grades: gradesResult.grades || []
    };
  } catch (error) {
    console.error("Error loading teacher dashboard:", error);
    return {
      teacherId: accountId,
      students: [],
      performance: [],
      behavior: [],
      grades: []
    };
  }
};
const actions = {
  setPerformance: async ({ request }) => {
    const formData = await request.formData();
    const payload = {
      teacherId: formData.get("teacherId"),
      childId: formData.get("childId"),
      remark: formData.get("remark")
    };
    try {
      const response = await fetch("http://localhost:3000/api/teacher/performance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        return fail(response.status, { error: result.message, action: "setPerformance" });
      }
      return { success: true, action: "setPerformance" };
    } catch (error) {
      console.error("Server error setting performance:", error);
      return fail(500, { error: "Internal server error", action: "setPerformance" });
    }
  },
  setBehavior: async ({ request }) => {
    const formData = await request.formData();
    const payload = {
      teacherId: formData.get("teacherId"),
      childId: formData.get("childId"),
      remark: formData.get("remark")
    };
    try {
      const response = await fetch("http://localhost:3000/api/teacher/behavior", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        return fail(response.status, { error: result.message, action: "setBehavior" });
      }
      return { success: true, action: "setBehavior" };
    } catch (error) {
      console.error("Server error setting behavior:", error);
      return fail(500, { error: "Internal server error", action: "setBehavior" });
    }
  },
  addGrade: async ({ request }) => {
    const formData = await request.formData();
    const payload = {
      teacherId: formData.get("teacherId"),
      childId: formData.get("childId"),
      value: formData.get("value")
    };
    try {
      const response = await fetch("http://localhost:3000/api/teacher/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        return fail(response.status, { error: result.message, action: "addGrade" });
      }
      return { success: true, action: "addGrade" };
    } catch (error) {
      console.error("Server error adding grade:", error);
      return fail(500, { error: "Internal server error", action: "addGrade" });
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BGUeBxWU.js')).default;
const server_id = "src/views/teacher-dashboard/+page.server.js";
const imports = ["_app/immutable/nodes/17.DjIiG2qW.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/DV-SbBOm.js","_app/immutable/chunks/GG0HJ46a.js","_app/immutable/chunks/5EQo4MA4.js","_app/immutable/chunks/DziUD3Sl.js","_app/immutable/chunks/BxjNL7a9.js","_app/immutable/chunks/zGfg6ZkI.js","_app/immutable/chunks/Be3a9zSC.js","_app/immutable/chunks/C-WEktKh.js","_app/immutable/chunks/BctPicw9.js","_app/immutable/chunks/BMGkvQ30.js","_app/immutable/chunks/BKuqSeVd.js"];
const stylesheets = ["_app/immutable/assets/AppFooter.BrdsvKeT.css","_app/immutable/assets/17.BirQouyG.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=17-CEjzxERy.js.map
