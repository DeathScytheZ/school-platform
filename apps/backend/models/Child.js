const {schoolDb} = require('../config/db');

class Child {
    static async createChild(user_id, level, medicalCondition, class_std_id, connection = schoolDb) {
        const [child] = await connection.execute(
            `INSERT INTO children(user_id, level, medicalCondition, class_std_id)
             VALUES(?, ?, ?, ?)`,
            [user_id, level, medicalCondition, class_std_id]);
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

    static async getChildByIdOrAccountId(id) {
        const [rows] = await schoolDb.execute(
            `SELECT children.id,
                    children.user_id,
                    children.level,
                    children.medicalCondition,
                    children.class_std_id,
                    users.first_name,
                    users.last_name,
                    CASE WHEN users.account_id = ? THEN 0 ELSE 1 END AS match_priority
             FROM children
             JOIN users ON children.user_id = users.id
             WHERE children.id = ? OR users.account_id = ?
             ORDER BY match_priority
             LIMIT 1`,
            [id, id, id]
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
