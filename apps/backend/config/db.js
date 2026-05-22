const mysql = require('mysql2/promise');

const schoolDb = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school'
});

const govDb = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gov'
});

module.exports = {
    schoolDb,
    govDb
};
