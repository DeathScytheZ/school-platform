import { loadProfile } from '$lib/server/profile';

export const load = async ({ fetch, locals, cookies }) => {
    const parentId = locals.user?.id || 1;
    const profile = await loadProfile(fetch, cookies, locals);

    try {
        const [dashboardResponse, announcementsResponse] = await Promise.all([
            fetch(`http://localhost:3000/api/parent/dashboard/${parentId}`),
            fetch('http://localhost:3000/api/parent/announcements')
        ]);

        const result = dashboardResponse.ok ? await dashboardResponse.json() : {};
        const announcementsResult = announcementsResponse.ok ? await announcementsResponse.json() : {};

        return {
            parentId: result.parentId || parentId,
            children: result.children || [],
            performance: result.performance || [],
            behavior: result.behavior || [],
            announcements: announcementsResult.announcements || [],
            profile
        };
    } catch (error) {
        console.error('Error loading parent dashboard:', error);
        return {
            parentId,
            children: [],
            performance: [],
            behavior: [],
            announcements: [],
            profile
        };
    }
};
