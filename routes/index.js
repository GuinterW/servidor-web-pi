var express = require('express');
var router = express.Router();
var lock = require('./../actions/lock.js');

router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Raspberry PI' });
});

var Gpio = require('onoff').Gpio,
  	button = new Gpio(21, 'in', 'rising');

button.watch(function(err, value){
  	if (err) {
    	throw err;
  	}
  	if(value==1){
    	lock('buttonOut');
  	}
});

module.exports = router;