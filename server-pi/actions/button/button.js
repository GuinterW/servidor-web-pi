var gpio = require('rpi-gpio');

function button(){
    
}

button.prototype.configInput = function(pin){
    gpio.setup(pin, gpio.DIR_IN, this.read);
}

button.prototype.configOutput = function(pin){
    gpio.setup(pin, gpio.DIR_OUT);
}

button.prototype.write = function(pin, status){
    gpio.write(pin, status);
}

button.prototype.read = function(pin){
    var configTimeout = 250;
    setInterval(function() {
        gpio.read(pin, function(err, value) {
            if(value!==undefined){
                console.log('The value is ' + value);
            }
            if(value==true){
                var configPin = 7;
                gpio.on('change', function(channel, value) {
                    console.log('Channel ' + channel + ' value is now ' + value);
                });
                gpio.setup(configPin, gpio.DIR_OUT, gpio.EDGE_BOTH);
            }
        });
    }, configTimeout);
}

module.exports = new button();