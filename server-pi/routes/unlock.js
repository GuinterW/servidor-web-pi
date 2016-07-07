var express = require('express');
var button = require('./../actions/button/button.js');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

	button.configOutput(7);
	button.write(7, true);

	setTimeout(function(){
		button.write(7, false);
	}, 3000);

	res.sendStatus(200);
});

module.exports = router;