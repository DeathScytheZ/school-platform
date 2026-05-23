import { fail } from '@sveltejs/kit';

export const load = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/system-admin-dashboard/children');
        if (!response.ok) {
            return { children: [] };
        }

        const result = await response.json();
        return { children: result.children || [] };
    } catch (error) {
        console.error('Error fetching children:', error);
        return { children: [] };
    }
};

export const actions = {
    createParent: async ({ request }) => {
        const formData = await request.formData();
        const payload = {
            officialId: formData.get('officialId'),
            password: formData.get('password'),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            dateOfBirth: formData.get('dateOfBirth'),
            wilaya: formData.get('wilaya'),
            commune: formData.get('commune'),
            childIds: formData.getAll('childIds')
        };

        try {
            const response = await fetch('http://localhost:3000/api/system-admin-dashboard/create-parent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();
            if (!response.ok) {
                return fail(response.status, { error: result.message, action: 'createParent' });
            }

            return { success: true, action: 'createParent' };
        } catch (error) {
            console.error('Server error creating parent:', error);
            return fail(500, { error: 'Internal server error', action: 'createParent' });
        }
    }
};
