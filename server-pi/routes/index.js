var express = require('express');
var wpi = require('wiring-pi');
var router = express.Router();
var button = require('./../actions/button/button.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Raspberry PI' });
});

button.configInput(12);
button.read(12);

module.exports = router;