import { fail } from "@sveltejs/kit";
import { loadProfile } from '$lib/server/profile';

export const load = async ({ fetch, cookies, locals }) => {
    return {
        profile: await loadProfile(fetch, cookies, locals)
    };
};

export const actions = {
    approveRequest: async ({ request}) => {
        const formData = await request.formData();
        const requestId = formData.get('id');
        const classId = formData.get('classId');

        try {
            const response = await fetch("http://localhost:3000/api/auth/addUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 'id': requestId, classId })
            });

            const result = await response.json();
            if(!response.ok) {
                return fail(response.status, { message: result.message });
            }

            return { success: true, message: 'User added successfully' };

        } catch(error) {
            return fail(500, { message: `Server communication error ${error}`});
        }
    },
    rejectRequest: async ({ request }) => {
        const formData = await request.formData();
        const requestId = formData.get('id');

        try {
            const response = await fetch("http://localhost:3000/api/auth/rejectUser", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ 'id': requestId })
            });

            const result = await response.json();
            if(!response.ok) {
                return fail(response.status, { message: result.message });
            }

            return { success: true, message: 'User request rejected successfully'};

        } catch(error) {
            return fail(500, { message: `Server communication error ${error}`});
        }
    }
}
