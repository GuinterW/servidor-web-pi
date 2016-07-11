var express = require('express');
var router = express.Router();
//var button = require('./../actions/button/button.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Raspberry PI' });
});

var Gpio = require('onoff').Gpio,
  led = new Gpio(4, 'out'),
  button = new Gpio(24, 'in', 'rising');

button.watch(function (err, value) {
  if (err) {
    throw err;
  }
  if(value==1){
    led.writeSync(1);
    setTimeout(function(){
      led.writeSync(0);
    },3000);
  }
});

module.exports = router;