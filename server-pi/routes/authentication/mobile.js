var express = require('express');
var Senha = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://192.168.1.117:27017/test';

var insertDocument = function(db, callback) {
   db.collection('restaurants').insertOne( {
    "_id" : ObjectId("54c955492b7c8eb21818bd09"),
    "passwords": ["123456", "654321"],
    "mobile": [],
    "nfc": []
}, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback();
  });
};

//res.redirect('../unlock');

Senha.get('/', function(req, res){
  var senha= req.query.senha;
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
      db.close();
    });
  });
});

module.exports = Senha;