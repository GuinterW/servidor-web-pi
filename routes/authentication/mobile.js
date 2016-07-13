var express = require('express');
var Senha = express.Router();
var Mongo = require("./../../classes/mongo/mongo.js");

Senha.get('/', function(req, res){
    var key = req.query.key;
    Mongo.find({key:key}, res, function(res){
      res.redirect("./../unlock?key=DD2016TRNEE");
    });
});

module.exports = Senha;