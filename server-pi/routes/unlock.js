var express = require('express');
//svar button = require('./../actions/button/button.js');
var router = express.Router();
var gpio = require('rpi-gpio');

/* GET home page. */

router.get('/', function(req, res, next) {
  var Gpio = require('onoff').Gpio,
    led = new Gpio(4, 'out');
  led.writeSync(1);
  setTimeout(function(){
    led.writeSync(0);
  },3000);
  res.sendStatus(200);
});

module.exports = router;