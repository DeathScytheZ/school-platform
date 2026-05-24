import { l as loadProfile } from "../../../chunks/profile.js";
const load = async ({ fetch, locals, cookies }) => {
  const accountId = locals.user?.id || 1;
  const profile = await loadProfile(fetch, cookies, locals);
  try {
    const response = await fetch(`http://localhost:3000/api/child/dashboard/${accountId}`);
    const result = response.ok ? await response.json() : {};
    return {
      profile,
      child: result.child || null,
      performance: result.performance || [],
      behavior: result.behavior || [],
      grades: result.grades || [],
      announcements: result.announcements || []
    };
  } catch (error) {
    console.error("Error loading child dashboard:", error);
    return {
      profile,
      child: null,
      performance: [],
      behavior: [],
      grades: [],
      announcements: []
    };
  }
};
export {
  load
};
