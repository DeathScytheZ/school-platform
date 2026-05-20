import {fail, redirect} from '@sveltejs/kit';

export const actions = {
    login: async ({request, cookies}) => {
        const formData = await request.formData();
        const officialId = formData.get('officialId');
        const password = formData.get('password');
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: "POST",
                headers: { "Content-Type":  "application/json" },
                body: JSON.stringify({ officialId: officialId, password: password })
            }); 

            const result = await response.json();
            if(!response.ok) {
                console.error(result.message);
                return fail(response.status, {error: result.message, officialId});
            }
           
            cookies.set('token', result.token, {
                path: '/',
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                maxAge: 7 * 24 * 60 * 60
            });

        } catch(error) {
            console.error('server error', error);  
            return fail(500, {error: 'Internal server error', officialId});
        }

        throw redirect(303, '/teacher-dashboard');

    } 
}

