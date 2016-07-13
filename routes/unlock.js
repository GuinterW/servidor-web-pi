var express = require('express');
var router = express.Router();
var lock = require('./../actions/lock.js');
var gpio = require('rpi-gpio');

/* GET home page. */

router.get('/', function(req, res, next) {
    if(req.query.key=='DD2016TRNEE'){
        lock();
        res.sendStatus(200);
    }
    else {
        res.sendStatus(404);
    }
});

module.exports = router;