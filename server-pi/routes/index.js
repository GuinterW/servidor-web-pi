var express = require('express');
var wpi = require('wiring-pi');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	
	var configPin = 7;
		
	wpi.setup('wpi');
	wpi.pinMode(configPin, wpi.OUTPUT);

	wpi.digitalWrite(configPin, 1 );
	console.log('ligou');

	(function(){
		wpi.digitalWrite(configPin, 0 );
		console.log('Desligou');
	}, 3000);
});

module.exports = router;