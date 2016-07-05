var express = require('express');
var router = express.Router();
var wpi = require('wiring-pi');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	
	var configPin = 7;
		
	wpi.setup('wpi');
	wpi.pinMode(configPin, wpi.OUTPUT);

	wpi.digitalWrite(configPin, 1 );
	console.log('ligou');

	setTimeOut(function(){
		wpi.digitalWrite(configPin, 0 );
		console.log('Desligou');
	}, 3000);
});

module.exports = router;
