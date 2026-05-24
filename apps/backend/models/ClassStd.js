const {schoolDb} = require('../config/db');

class ClassStd {
    static async createClassStd(name, year, level, connection = schoolDb) {
        const [classStd] = await connection.execute(
            `INSERT INTO class_std(name, year, level)
             VALUES(?, ?, ?)`,
            [name, year, level]);
        const class_std_id = classStd.insertId;

        await connection.execute(
            `INSERT INTO class_school(id, class_std_id, school_teacher_id)
             VALUES(?, ?, ?)`,
            [class_std_id, class_std_id, null]);

        await connection.execute(
            `INSERT INTO quran_groups(id, class_std_id, quran_teacher_id)
             VALUES(?, ?, ?)`,
            [class_std_id, class_std_id, null]);

        await connection.execute(
            `INSERT INTO sport_groups(id, class_std_id, coach_id)
             VALUES(?, ?, ?)`,
            [class_std_id, class_std_id, null]);

        return class_std_id;
    }

    static async getAvailableClassesByType(type) {
        const normalizedType = {
            'school-teacher': 'school',
            'sports-coach': 'sport'
        }[type] || type;

        if(normalizedType === 'school') {
            const [rows] = await schoolDb.execute(
                `SELECT class_school.id, class_std.name, class_std.year, class_std.level
                 FROM class_school
                 JOIN class_std ON class_school.class_std_id = class_std.id
                 WHERE class_school.school_teacher_id IS NULL`
            );
            return rows;
        }

        if(normalizedType === 'quran') {
            const [rows] = await schoolDb.execute(
                `SELECT quran_groups.id, class_std.name, class_std.year, class_std.level
                 FROM quran_groups
                 JOIN class_std ON quran_groups.class_std_id = class_std.id
                 WHERE quran_groups.quran_teacher_id IS NULL`
            );
            return rows;
        }

        if(normalizedType === 'sport') {
            const [rows] = await schoolDb.execute(
                `SELECT sport_groups.id, class_std.name, class_std.year, class_std.level
                 FROM sport_groups
                 JOIN class_std ON sport_groups.class_std_id = class_std.id
                 WHERE sport_groups.coach_id IS NULL`
            );
            return rows;
        }

        return [];
    }

    static async assignTeacherToClass(type, class_id, teacher_id, connection = schoolDb) {
        const normalizedType = {
            'school-teacher': 'school',
            'sports-coach': 'sport'
        }[type] || type;

        if(normalizedType === 'school') {
            const [teacherOfSchool] = await connection.execute(
                `INSERT INTO teacher_of_school(teacher_id, class_std_id)
                 VALUES(?, ?)`,
                [teacher_id, class_id]
            );

            const [result] = await connection.execute(
                `UPDATE class_school
                 SET school_teacher_id = ?
                 WHERE id = ?`,
                [teacherOfSchool.insertId, class_id]
            );
            return result;
        }

        if(normalizedType === 'quran') {
            const [teacherOfQuran] = await connection.execute(
                `INSERT INTO teacher_of_quran(teacher_id)
                 VALUES(?)`,
                [teacher_id]
            );

            const [result] = await connection.execute(
                `UPDATE quran_groups
                 SET quran_teacher_id = ?
                 WHERE id = ?`,
                [teacherOfQuran.insertId, class_id]
            );
            return result;
        }

        if(normalizedType === 'sport') {
            const [sportsCoach] = await connection.execute(
                `INSERT INTO sports_coach(teacher_id)
                 VALUES(?)`,
                [teacher_id]
            );

            const [result] = await connection.execute(
                `UPDATE sport_groups
                 SET coach_id = ?
                 WHERE id = ?`,
                [sportsCoach.insertId, class_id]
            );
            return result;
        }

        return null;
    }

    static async getClassList() {
        const [rows] = await schoolDb.execute(
            `SELECT cs.*,
                    cschool.id AS class_school_id,
                    cschool.school_teacher_id,
                    qg.id AS quran_group_id,
                    qg.quran_teacher_id,
                    sg.id AS sport_group_id,
                    sg.coach_id
             FROM class_std cs
             LEFT JOIN class_school cschool ON cschool.class_std_id = cs.id
             LEFT JOIN quran_groups qg ON qg.class_std_id = cs.id
             LEFT JOIN sport_groups sg ON sg.class_std_id = cs.id`
        );
        return rows;
    }

    static async getTeachersBySpecialization(specialization) {
        const [rows] = await schoolDb.execute(
            `SELECT t.id, u.first_name AS firstName, u.last_name AS lastName
             FROM teachers t
             JOIN users u ON t.user_id = u.id
             WHERE t.subject = ?`,
            [specialization]
        );
        return rows;
    }
}

module.exports = ClassStd;
