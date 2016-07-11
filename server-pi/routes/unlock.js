var express = require('express');
var led = require('./../actions/led.js');
var router = express.Router();
var gpio = require('rpi-gpio');

/* GET home page. */

router.get('/', function(req, res, next) {
  led();
  res.sendStatus(200);
});

module.exports = router;