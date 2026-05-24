export async function loadProfile(fetch, cookies, locals) {
    if (!locals.user) return null;

    try {
        const token = cookies.get('token');
        const response = await fetch('http://localhost:3000/api/auth/profile', {
            headers: token ? { cookie: `token=${token}` } : {}
        });

        if (!response.ok) {
            return {
                id: locals.user.id,
                role: locals.user.role
            };
        }

        const result = await response.json();
        return result.user || {
            id: locals.user.id,
            role: locals.user.role
        };
    } catch (error) {
        console.error('Error loading profile:', error);
        return {
            id: locals.user.id,
            role: locals.user.role
        };
    }
}
