const {schoolDb} = require('../config/db');

class Teacher {
    static async createTeacher(user_id, subject, connection = schoolDb) {
        const [teacher] = await connection.execute(
            `INSERT INTO teachers(user_id, subject)
             VALUES(?, ?)`,
            [user_id, subject]);
        return teacher;
    }
}

module.exports = Teacher;

