import { loadProfile } from '$lib/server/profile';

export const load = async ({ fetch, cookies, locals }) => {
    return {
        profile: await loadProfile(fetch, cookies, locals)
    };
};
