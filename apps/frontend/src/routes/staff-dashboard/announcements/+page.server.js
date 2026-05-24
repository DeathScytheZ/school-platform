import { fail } from '@sveltejs/kit';

export const load = async ({ fetch, parent }) => {
    const parentData = await parent();

    try {
        const response = await fetch('http://localhost:3000/api/announcements?role=staff');
        if (!response.ok) {
            return { announcements: [], profile: parentData.profile };
        }

        const result = await response.json();
        return { announcements: result.announcements || [], profile: parentData.profile };
    } catch (error) {
        console.error('Error loading staff announcements:', error);
        return { announcements: [], profile: parentData.profile };
    }
};

export const actions = {
    createSchoolAnnouncement: async ({ request }) => {
        const formData = await request.formData();
        const payload = {
            title: formData.get('title'),
            subject: formData.get('subject'),
            description: formData.get('description'),
            date: formData.get('date'),
            staffId: formData.get('staffId')
        };

        try {
            const response = await fetch('http://localhost:3000/api/announcements/school', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();
            if (!response.ok) {
                return fail(response.status, { error: result.message, action: 'createSchool' });
            }

            return { success: true, action: 'createSchool' };
        } catch (error) {
            console.error('Server error creating school announcement:', error);
            return fail(500, { error: 'Internal server error', action: 'createSchool' });
        }
    }
};
