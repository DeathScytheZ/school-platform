const secret = process.env.JWT_SECRET;
const expiresIn = '7d';

module.exports = {
    secret,
    expiresIn
}
