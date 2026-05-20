const {schoolDb} = require('../config/db');

class User {
    static async createUser(account_id, first_name, last_name, date_of_birth, connection = schoolDb) {
        const [user] = await connection.execute(
            `INSERT INTO users(account_id, first_name, last_name, date_of_birth)
             VALUE(?, ?, ?, ?)`, 
            [account_id, first_name, last_name, date_of_birth]);
        return user;
    }
}

module.exports = User;
