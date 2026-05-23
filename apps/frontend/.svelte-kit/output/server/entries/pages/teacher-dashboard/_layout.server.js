import { redirect } from "@sveltejs/kit";
const load = async ({ locals }) => {
  if (!locals.user) throw redirect(302, "auth");
  if (locals.user.role !== "teacher") throw redirect(302, "/");
  return {
    welcomeMessage: `Weclome to the dashboard, Teacher #${locals.user.id}`
  };
};
export {
  load
};
