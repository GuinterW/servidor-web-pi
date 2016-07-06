var express = require('express');
var wpi = require('wiring-pi');
var router = express.Router();

/* GET home page. */
module.exports = {
	router.get(function(req, res){
		unlock : function() {
		
			var configPin = 7;
				
			wpi.setup('wpi');
			wpi.pinMode(configPin, wpi.OUTPUT);

			wpi.digitalWrite(configPin, 1);

			setTimeout(function(){
				wpi.digitalWrite(configPin, 0);
			}, 3000);

			res.sendStatus(200);
		}
	});
};