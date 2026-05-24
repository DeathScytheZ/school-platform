import { l as loadProfile } from "../../../../chunks/profile.js";
const load = async ({ fetch, cookies, locals }) => {
  return {
    profile: await loadProfile(fetch, cookies, locals)
  };
};
export {
  load
};
