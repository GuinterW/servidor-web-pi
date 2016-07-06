var express = require('express');
var wpi = require('wiring-pi');
var button = require('./../actions/button/button.js');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

	button.configOutput(7);
	button.write(7, 1);

	setTimeout(function(){
		button.write(7, 0);
	}, 3000);

	res.sendStatus(200);
});

module.exports = router;