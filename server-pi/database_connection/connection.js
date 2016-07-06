var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '',
    user     : '',
    password : '',
    database : ''
});

module.exports = function() {
    connection.query(textQuery, values, function(err, result){
        method(err, result, res);
    });
};