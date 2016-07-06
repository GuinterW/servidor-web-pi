var wpi = require('wiring-pi');
var gpio = require('rpi-gpio');

function button(){
    var url = "localhost:3000/unlock";
}

button.prototype.configInput = function(pin){
    // GPIO pin of the led
    gpio.setup(pin, gpio.DIR_IN, this.read);
}

button.prototype.read = function(pin){
    var configTimeout = 500;
    setInterval(function() {
        gpio.read(pin, function(err, value) {
            if(value!==undefined){
                console.log('The value is ' + value);
            }
        });
    }, configTimeout);
}

module.exports = new button();