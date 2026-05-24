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

    static async getProfileByAccountId(account_id) {
        const [rows] = await schoolDb.execute(
            `SELECT a.id AS accountId,
                    a.official_id AS officialId,
                    a.role,
                    u.id AS userId,
                    u.first_name AS firstName,
                    u.last_name AS lastName,
                    u.email,
                    u.phone,
                    t.subject AS teacherSubject,
                    s.position AS staffPosition,
                    p.wilaya AS parentWilaya,
                    p.commune AS parentCommune,
                    c.level AS childLevel
             FROM accounts a
             LEFT JOIN users u ON u.account_id = a.id
             LEFT JOIN teachers t ON t.user_id = u.id
             LEFT JOIN staff s ON s.user_id = u.id
             LEFT JOIN parents p ON p.user_id = u.id
             LEFT JOIN children c ON c.user_id = u.id
             WHERE a.id = ?
             LIMIT 1`,
            [account_id]
        );
        return rows[0] || null;
    }
}

module.exports = User;
