var express = require('express');
var Senha = express.Router();
var connection = require('./../../database_connection/connection.js');
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
function foo(){
    res.type('json');
    res.redirect('../routes/unlock');
}

Senha.get('/', function(req, res){
    var senha= req.query.senha;
    connection('SELECT  *  FROM  usuarios WHERE chave LIKE ?', ['%' + senha], foo);
    /*connection.query('SELECT  *  FROM  usuarios WHERE chave LIKE ?', ['%' + senha], function(err,result){
        res.type('json');
        //res.redirect('../unlock');
    });*/
    /*if(senha=='123456'){
        res.redirect('../unlock');
    }*/
});

module.exports = Senha;