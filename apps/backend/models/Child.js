const {schoolDb} = require('../config/db');

class Child {
    static async createChild(user_id, level, medicalCondition, connection = schoolDb) {
        const [child] = await connection.execute(
            `INSERT INTO children(user_id, level, medicalCondition)
             VALUES(?, ?, ?)`,
            [user_id, level, medicalCondition]);
        return child;
    }

    static async getChildById(id) {
        const [rows] = await schoolDb.execute(
            `SELECT *
             FROM children
             WHERE id = ?`,
            [id]
        );
        return rows[0] || null;
    }

    static async getChildrenByParentId(parentId) {
        const [rows] = await schoolDb.execute(
            `SELECT c.*
             FROM children c
             INNER JOIN parent_child pc ON pc.child_id = c.id
             WHERE pc.parent_id = ?`,
            [parentId]
        );
        return rows;
    }

    static async linkToParent(parent_id, child_id, connection = schoolDb) {
        const [result] = await connection.execute(
            `INSERT INTO parent_child(parent_id, child_id)
             VALUES(?, ?)`,
            [parent_id, child_id]);
        return result;
    }
}

module.exports = {
    Child
};
