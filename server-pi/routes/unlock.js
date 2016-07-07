var express = require('express');
var button = require('./../actions/button/button.js');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

	button.unlock();

	res.sendStatus(200);
});

module.exports = router;