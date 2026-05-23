import jwt from 'jsonwebtoken';

const JWT_SECRET = "0f8fc0d5e4f8021da716e661ec7aea4f86c38eb942a8cb6cb9d6d1c290e7cdf1";
const handle = async ({ event, resolve }) => {
  const token = event.cookies.get("token");
  event.locals.user = null;
  if (token) {
    try {
      const decoded = await jwt.verify(token, JWT_SECRET);
      event.locals.user = decoded;
    } catch (error) {
      console.error("Invalid token", error.message);
    }
  }
  return await resolve(event);
};

export { handle };
//# sourceMappingURL=hooks.server-h0sI_DT2.js.map
