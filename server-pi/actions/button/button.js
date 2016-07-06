var wpi = require('wiring-pi');
var gpio = require('rpi-gpio');

function button(){
    
}

button.prototype.configInput = function(pin){
    // GPIO pin of the led
    gpio.setup(pin, gpio.DIR_IN, this.read);
}

button.prototype.configOutput = function(pin){
    var configPin = pin;

    wpi.setup('wpi');
    wpi.pinMode(configPin, wpi.OUTPUT);
}

button.prototype.write = function(pin, status){
    wpi.digitalWrite(pin, status);
}

button.prototype.read = function(pin){
    var configTimeout = 200;
    setInterval(function() {
        gpio.read(pin, function(err, value) {
            if(value!==undefined){
                console.log('The value is ' + value);
            }
            if(value==true){
                var configPin = 7;

                wpi.setup('wpi');
                wpi.pinMode(configPin, wpi.OUTPUT);

                wpi.digitalWrite(configPin, 1);

                setTimeout(function(){
                    wpi.digitalWrite(configPin, 0);
                }, 3000);
            }
        });
    }, configTimeout);
}

module.exports = new button();