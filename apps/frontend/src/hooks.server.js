import jwt from 'jsonwebtoken';
import {JWT_SECRET} from '$env/static/private';

export const handle = async ({event, resolve}) => {
    const token = event.cookies.get('token');

    event.locals.user = null;
    if(token) {
        try {
            const decoded = await jwt.verify(token, JWT_SECRET);
            event.locals.user = decoded;
        } catch(error) {
            console.error('Invalid token', error.message);
        }
    }

    return await resolve(event);
}

