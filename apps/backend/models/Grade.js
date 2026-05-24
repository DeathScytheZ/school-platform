const {schoolDb} = require('../config/db');

class Grade {
    static async createGrade(child_id, teacher_id, value, date, type, connection = schoolDb) {
        const [grade] = await connection.execute(
            `INSERT INTO grades(child_id, teacher_id, value, date, type)
             VALUES(?, ?, ?, ?, ?)`,
            [child_id, teacher_id, value, date, type]
        );
        return grade;
    }

    static async getGradesByTeacher(teacher_id) {
        const [rows] = await schoolDb.execute(
            `SELECT grades.id,
                    grades.value,
                    grades.date,
                    grades.type,
                    users.first_name,
                    users.last_name
             FROM grades
             JOIN children ON grades.child_id = children.id
             JOIN users ON children.user_id = users.id
             WHERE grades.teacher_id = ?`,
            [teacher_id]
        );
        return rows;
    }

    static async getGradesByChild(child_id) {
        const [rows] = await schoolDb.execute(
            `SELECT grades.id,
                    grades.value,
                    grades.date,
                    grades.type
             FROM grades
             WHERE grades.child_id = ?
             ORDER BY grades.date DESC`,
            [child_id]
        );
        return rows;
    }

    static async getGradesByParent(parent_id) {
        const [rows] = await schoolDb.execute(
            `SELECT grades.id,
                    grades.value,
                    grades.date,
                    grades.type,
                    users.first_name,
                    users.last_name
             FROM grades
             JOIN children ON grades.child_id = children.id
             JOIN parent_child ON children.id = parent_child.child_id
             JOIN users ON children.user_id = users.id
             WHERE parent_child.parent_id = ?
             ORDER BY grades.date DESC`,
            [parent_id]
        );
        return rows;
    }
}

module.exports = {
    Grade
};
