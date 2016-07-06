var express = require('express');
var wpi = require('wiring-pi');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('pi server');
});

module.exports = router;