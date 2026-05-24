import {redirect} from '@sveltejs/kit';
import { loadProfile } from '$lib/server/profile';

export const load = async ({locals, fetch, cookies}) => {
    if(!locals.user) throw redirect(302, 'auth');
    if (locals.user.role !== 'teacher') throw redirect(302, '/');

    return {
        welcomeMessage: `Welcome to the dashboard, Teacher #${locals.user.id}`,
        profile: await loadProfile(fetch, cookies, locals)
    };
};
