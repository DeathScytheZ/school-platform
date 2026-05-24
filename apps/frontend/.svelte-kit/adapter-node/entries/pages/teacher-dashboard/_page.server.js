import { fail } from "@sveltejs/kit";
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
      value: formData.get("value"),
      date: formData.get("date"),
      type: formData.get("type")
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
export {
  actions,
  load
};
