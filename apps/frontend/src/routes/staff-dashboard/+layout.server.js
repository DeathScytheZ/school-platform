import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
    if (!locals.user) throw redirect(302, '/auth');
    if (locals.user.role !== 'staff') throw redirect(302, '/');

    return {
        welcomeMessage: `Welcome to the dashboard, Staff #${locals.user.id}`
    };
};
