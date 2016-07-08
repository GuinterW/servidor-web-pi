var express = require('express');
var Senha = express.Router();
//var Reserva = getmodule('api/api');

//CONEXAO SERVER.
var mysql = require('mysql');
/*var connection = mysql.createConnection({
    host     : '192.168.1.140',
    user     : 'root',
    password : 'grenal23',
    port : 3306, //port mysql
    database:'servidorPi'
});*/


Senha.get('/', function(req, res){
    var senha= req.query.senha;
    /*connection.query('SELECT  *  FROM  usuarios WHERE chave LIKE ?', ['%' + senha], function(err,result){
        res.type('json');
        //res.redirect('../unlock');
        res.sendStatus(200);
    });*/
    res.sendStatus(200);
});

module.exports = Senha;