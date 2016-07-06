var express = require('express');
var wpi = require('wiring-pi');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Raspberry PI' });
});

module.exports = router;