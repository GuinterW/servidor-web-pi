var express = require('express');
var led = require('./../actions/led.js');
var router = express.Router();
var gpio = require('rpi-gpio');

/* GET home page. */

router.get('/', function(req, res, next) {
    if(req.query.key=='fjdn!=?fuioeawuifpEJP9!=?3P98JEWAD9V32H9F8Nn?f9Q3NF9UHQ3HIu2qh!eh2qHE92HQUE==2W'){
        led();
        res.sendStatus(200);
    }
    else {
        res.sendStatus(404);
    }
});

module.exports = router;