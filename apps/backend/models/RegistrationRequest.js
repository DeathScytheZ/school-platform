const { schoolDb } = require('../config/db');
const bcrypt = require('bcrypt');

const RegistrationRequestStatus = Object.freeze({
    PENDING: 'pending',
    GOV_VERIFIED: 'gov_verified',
    GOV_REJECTED: 'gov_rejected',
    ACCEPTED: 'accepted',
    REJECTED: 'rejected'
});

class RegistrationRequest {
    static async createRegistrationRequest(officialId, password, firstName, lastName, dateOfBirth, phone, email, role, roleDetail) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const [registrationRequest] = await schoolDb.execute(
            `INSERT INTO registration_requests(official_id, password, first_name, last_name, date_of_birth, phone, email, role, role_detail)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [officialId, hashedPassword, firstName, lastName, dateOfBirth, phone, email, role, roleDetail]
        );
        return registrationRequest;
    }

    static async getRegistrationRequestList() {
        const [requestList] = await schoolDb.execute(`SELECT * FROM registration_requests WHERE 1`);
        return requestList;
    }

    static async getRegistrationRequest(id) {
        const [rows] = await schoolDb.execute(
            `SELECT id, official_id, password, first_name, last_name, date_of_birth, phone, email, role, role_detail
             FROM registration_requests
             WHERE id = ?`,
            [id]
        );
        const request  = rows[0]
        if(!request) return null;
        return request; 
    }

    static async updateStatus(id, status, connection = schoolDb) {
        await connection.execute(
            `UPDATE registration_requests
             SET status = ?
             WHERE id = ?`,
            [status, id]);
    }
}

module.exports = {
    RegistrationRequest,
    RegistrationRequestStatus
};

