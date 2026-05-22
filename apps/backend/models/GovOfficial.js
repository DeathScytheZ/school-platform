const { govDb } = require('../config/db');

class GovOfficial {
    static async verify(officialId, firstName, lastName, dateOfBirth, role) {
        let roleTable;
        if(role === 'teacher') roleTable = 'teachers';
        if(role === 'staff') roleTable = 'staff';
        const [rows] = await govDb.execute(
            `SELECT id FROM  \`${roleTable}\`
             WHERE official_id = ?
               AND first_name  = ?
               AND last_name   = ?
               AND date_of_birth = ?`,
            [officialId, firstName, lastName, dateOfBirth]
        );
        return rows.length > 0;
    }
}

module.exports = GovOfficial;
