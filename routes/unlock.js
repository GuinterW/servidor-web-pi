var express = require('express');
var led = require('./../actions/led.js');
var router = express.Router();
var gpio = require('rpi-gpio');

/* GET home page. */

router.get('/', function(req, res, next) {
    if(req.query.key=='DD2016TRNEE'){
        led();
        res.sendStatus(200);
    }
    else {
        res.sendStatus(404);
    }
});

module.exports = router;