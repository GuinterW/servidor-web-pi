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
    var configTimeout = 100;
    setInterval(function() {
        gpio.read(pin, function(err, value) {
            if(value!==undefined){
                console.log('The value is ' + value);
            }
            if(value==true){
                var configPin = 7;
                gpio.setup(configPin, gpio.DIR_OUT);
                gpio.write(configPin, true, function(err){
                    /*
                    setTimeout(function(){
                        gpio.write(configPin, false);
                    }, 3000);
                    */
                });
            }
        });
    }, configTimeout);
}

module.exports = new button();