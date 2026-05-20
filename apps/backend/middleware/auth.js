const jwt = require('jsonwebtoken');
const {secret} = require('../config/jwt');

const authenticate = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.status(401).json({
            success: false,
            message: 'No token provided'
        });
    }
   
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch(error) {
        console.error(error);
        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token'
        });
    }
}

module.exports = authenticate;
