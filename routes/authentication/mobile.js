var express = require('express');
var Senha = express.Router();
var Mongo = require("./../../classes/mongo/mongo.js");

Senha.get('/', function(req, res){
    var key = req.query.key;
<<<<<<< b09b80ec00725ea102de711ae6a9b08fe361ab3d
    Mongo.find({key:key}, res, function(res){
    	res.redirect("./../unlock?key=DD2016TRNEE");
=======
    Mongo("users", {user: {name: String, key: String, nfc: String}});
    Mongo.find({key:key}, res, function(res, userObj){
      res.redirect("./../unlock?key=DD2016TRNEE&device=mobile&user="+userObj.name);
>>>>>>> mongo
    });
});

module.exports = Senha;