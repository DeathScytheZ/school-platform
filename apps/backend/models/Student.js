const {schoolDb} = require("../config/db");

class Student {
    static async getStudentList(teacherId) {
        const [student] = await schoolDb.execute(
            `SELECT first_name, last_name, class 
             FROM students 
             WHERE teacher_id = ?`,
            [teacherId]);
        return student; 
    }
}

module.exports = {
    Student
};
