const {schoolDb} = require('../config/db');

class User {
    static async createUser(account_id, first_name, last_name, date_of_birth, phone, email, connection = schoolDb) {
        const [user] = await connection.execute(
            `INSERT INTO users(account_id, first_name, last_name, date_of_birth, phone, email)
             VALUE(?, ?, ?, ?, ?, ?)`,
            [account_id, first_name, last_name, date_of_birth, phone, email]);
        return user;
    }

    static async getAllUsers() {
        const [rows] = await schoolDb.execute(
            `SELECT u.id, a.official_id, u.first_name, u.last_name, u.date_of_birth, u.phone, u.email, a.role
             FROM users u
             JOIN accounts a ON u.account_id = a.id`
        );
        return rows;
    }
}

module.exports = User;
