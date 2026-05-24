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

    static async getParentByIdOrAccountId(id) {
        const [rows] = await schoolDb.execute(
            `SELECT parents.id,
                    CASE WHEN users.account_id = ? THEN 0 ELSE 1 END AS match_priority
             FROM parents
             JOIN users ON parents.user_id = users.id
             WHERE parents.id = ? OR users.account_id = ?
             ORDER BY match_priority
             LIMIT 1`,
            [id, id, id]
        );
        return rows[0] || null;
    }

    static async getChildrenByParentId(parentId) {
        const [rows] = await schoolDb.execute(
            `SELECT children.id,
                    users.first_name,
                    users.last_name,
                    children.level,
                    children.medicalCondition
             FROM children
             JOIN parent_child ON children.id = parent_child.child_id
             JOIN users ON children.user_id = users.id
             WHERE parent_child.parent_id = ?`,
            [parentId]
        );
        return rows;
    }

    static async getPerformanceByParentId(parentId) {
        const [rows] = await schoolDb.execute(
            `SELECT performance.remark,
                    users.first_name,
                    users.last_name
             FROM performance
             JOIN children ON performance.child_id = children.id
             JOIN parent_child ON children.id = parent_child.child_id
             JOIN users ON children.user_id = users.id
             WHERE parent_child.parent_id = ?`,
            [parentId]
        );
        return rows;
    }

    static async getBehaviorByParentId(parentId) {
        const [rows] = await schoolDb.execute(
            `SELECT behavior.remark,
                    users.first_name,
                    users.last_name
             FROM behavior
             JOIN children ON behavior.child_id = children.id
             JOIN parent_child ON children.id = parent_child.child_id
             JOIN users ON children.user_id = users.id
             WHERE parent_child.parent_id = ?`,
            [parentId]
        );
        return rows;
    }
}

module.exports = {
    Parent
};
