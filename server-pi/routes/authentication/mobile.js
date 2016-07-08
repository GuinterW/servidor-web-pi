var express = require('express');
var Senha = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

//var connection = require('./../../database_connection/connection.js');
//var Reserva = getmodule('api/api');

//CONEXAO SERVER.
//var mysql = require('mysql');
/*var connection = mysql.createConnection({
    host     : '192.168.1.140',
    user     : 'root',
    password : 'grenal23',
    port : 3306, //port mysql
    database:'servidorPi'
});*/
/*function foo(){
    res.type('json');
    res.redirect('../routes/unlock');
}*/

var insertDocument = function(db, callback) {
   db.collection('authentication').insertOne( {
    "passwords": ["123456", "654321"],
    "mobile": [],
    "nfc": []
}, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback();
  });
};

Senha.get('/', function(req, res){
    var senha= req.query.senha;
    //connection('SELECT  *  FROM  usuarios WHERE chave LIKE ?', ['%' + senha], foo);
    /*connection.query('SELECT  *  FROM  usuarios WHERE chave LIKE ?', ['%' + senha], function(err,result){
        res.type('json');
        //res.redirect('../unlock');
    });*/
    /*if(senha=='123456'){
        res.redirect('../unlock');
    }*/

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});


});

module.exports = Senha;