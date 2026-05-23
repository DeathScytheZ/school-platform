const {schoolDb} = require('../config/db');

class Parent {
    static async createParent(user_id, wilaya, commune, connection = schoolDb) {
        const [parent] = await connection.execute(
            `INSERT INTO parents(user_id, wilaya, commune)
             VALUES(?, ?, ?)`,
            [user_id, wilaya, commune]);
        return parent;
    }

    static async getParentByUserId(user_id) {
        const [rows] = await schoolDb.execute(
            `SELECT *
             FROM parents
             WHERE user_id = ?`,
            [user_id]
        );
        return rows[0] || null;
    }
}

module.exports = {
    Parent
};
