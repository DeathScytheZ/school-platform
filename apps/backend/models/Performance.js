const {schoolDb} = require('../config/db');

class Performance {
    static async createOrUpdatePerformance(teacher_id, child_id, remark, connection = schoolDb) {
        const [rows] = await connection.execute(
            `SELECT *
             FROM performance
             WHERE teacher_id = ? AND child_id = ?`,
            [teacher_id, child_id]
        );

        if(rows.length > 0) {
            const [result] = await connection.execute(
                `UPDATE performance
                 SET remark = ?
                 WHERE teacher_id = ? AND child_id = ?`,
                [remark, teacher_id, child_id]
            );
            return result;
        }

        const [result] = await connection.execute(
            `INSERT INTO performance(teacher_id, child_id, remark)
             VALUES(?, ?, ?)`,
            [teacher_id, child_id, remark]
        );
        return result;
    }

    static async getPerformanceByChild(child_id) {
        const [rows] = await schoolDb.execute(
            `SELECT *
             FROM performance
             WHERE child_id = ?`,
            [child_id]
        );
        return rows;
    }

    static async getPerformanceByTeacher(teacher_id) {
        const [rows] = await schoolDb.execute(
            `SELECT performance.*, child_user.first_name, child_user.last_name
             FROM performance
             JOIN teacher_of_school ON performance.teacher_id = teacher_of_school.id
             JOIN teachers ON teacher_of_school.teacher_id = teachers.id
             JOIN users teacher_user ON teachers.user_id = teacher_user.id
             JOIN children ON performance.child_id = children.id
             JOIN users child_user ON children.user_id = child_user.id
             WHERE teacher_of_school.id = ?
                OR teachers.id = ?
                OR teacher_user.account_id = ?`,
            [teacher_id, teacher_id, teacher_id]
        );
        return rows;
    }
}

module.exports = {
    Performance
};
