import { fail } from '@sveltejs/kit';
import { loadProfile } from '$lib/server/profile';

export const load = async ({ fetch, cookies, locals }) => {
    const profile = await loadProfile(fetch, cookies, locals);

    try {
        const response = await fetch('http://localhost:3000/api/announcements?role=admin');
        if (!response.ok) {
            return { announcements: [], profile };
        }

        const result = await response.json();
        return { announcements: result.announcements || [], profile };
    } catch (error) {
        console.error('Error loading announcements:', error);
        return { announcements: [], profile };
    }
};

export const actions = {
    createGeneralAnnouncement: async ({ request }) => {
        const formData = await request.formData();
        const payload = {
            title: formData.get('title'),
            subject: formData.get('subject'),
            description: formData.get('description'),
            date: formData.get('date')
        };

        try {
            const response = await fetch('http://localhost:3000/api/announcements/general', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();
            if (!response.ok) {
                return fail(response.status, { error: result.message, action: 'createGeneral' });
            }

            return { success: true, action: 'createGeneral' };
        } catch (error) {
            console.error('Server error creating general announcement:', error);
            return fail(500, { error: 'Internal server error', action: 'createGeneral' });
        }
    }
};
