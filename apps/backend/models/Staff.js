const {schoolDb} = require('../config/db');

class Staff {
    static async createStaff(user_id, position, connection = schoolDb) {
        const [staff] = await connection.execute(
            `INSERT INTO staff(user_id, position)
             VALUES(?, ?)`,
            [user_id, position]);
        return staff;
    }
}

module.exports = Staff;
