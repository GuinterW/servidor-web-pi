var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.1.140',
    user     : 'root',
    password : 'grenal23',
    database : 'servidorPi'
});

module.exports = function(textQuery, values, method) {
    connection.query(textQuery, values, function(err, result){
        method(err, result, res);
    });
};