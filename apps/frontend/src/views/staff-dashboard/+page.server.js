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
