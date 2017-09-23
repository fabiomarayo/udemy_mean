var mysql = require('mysql');

var connMySQL = function() {
    console.log('Conexão feita');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mean_noticias'
    });
}
module.exports = function() {
    return connMySQL;
}