var express = require('express');
var Senha = express.Router();
var Mongo = require("./../../classes/mongo/mongo.js");

Senha.get('/', function(req, res){
    var senha= req.query.senha;
    Mongo.find({key:senha}, res, function(res){
        res.redirect("./../unlock?key=fjdn!=?fuioeawuifpEJP9!=?3P98JEWAD9V32H9F8Nn?f9Q3NF9UHQ3HIu2qh!eh2qHE92HQUE==2W");
    });
});

module.exports = Senha;