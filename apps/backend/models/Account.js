const {schoolDb} = require('../config/db');
const bcrypt = require('bcrypt');

const AccountStatus = Object.freeze({
    ACTIVE: 'active',
    SUSPENDED: 'suspended'
});

class Account {
    static async createAccount(officaial_id, password, role, status, connection = schoolDb) {
        const [account] = await connection.execute(
            `INSERT INTO accounts(official_id, password, role, status)
             VALUES(?, ?, ?, ?)`,
            [officaial_id, password, role, status]);
        return account;
    }

    static async authenticate(officialId, password) {
        const [ rows ] = await schoolDb.execute(
            `SELECT id, password, role
             FROM accounts
             WHERE official_id = ?`,
            [officialId]
        ); 
        
        const accountData = rows[0];
        const result = await bcrypt.compare(password, accountData.password);
        if(!accountData || !result) return null;
        
        return {id: accountData.id, role: accountData.role}
    }
}

module.exports = {
    Account,
    AccountStatus
};

