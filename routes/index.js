var express = require('express');
var router = express.Router();
var lock = require('./../actions/lock.js');

router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Raspberry PI' });
});

var Gpio = require('onoff').Gpio,
  	button = new Gpio(21, 'in', 'rising'),
  	vcc = new Gpio(26, 'out'),
    rele = new Gpio(16, 'out');
    
vcc.writeSync(1);
rele.writeSync(1);

button.watch(function(err, value){
  	if (err) {
    	throw err;
  	}
  	if(value==1){
    	lock('buttonOut', 'German');
  	}
});

module.exports = router;