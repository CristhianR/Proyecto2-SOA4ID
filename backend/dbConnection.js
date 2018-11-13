const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'serafin00',
        database: 'users_sports_service'
    });
}