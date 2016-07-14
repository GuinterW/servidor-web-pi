var express = require('express');
var router = express.Router();
var lock = require('./../actions/lock.js');

router.get('/', function(req, res, next) {
<<<<<<< b09b80ec00725ea102de711ae6a9b08fe361ab3d
	res.render('index', { title: 'Server Raspberry PI' });
});

var Gpio = require('onoff').Gpio,
	button = new Gpio(21, 'in', 'rising');

button.watch(function(err, value){
	if (err) {
		throw err;
	}
  	if(value==1){
		lock();
	}
=======
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
>>>>>>> mongo
});

module.exports = router;