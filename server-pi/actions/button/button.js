var wpi = require('wiring-pi');

function button(){
     
}

button.prototype.configInput = function(pin){
    // GPIO pin of the led
    var configPin = pin;
    wpi.setup('wpi');
    wpi.pinMode(configPin, wpi.INPUT);
}

button.prototype.read = function(pin){
    var configTimeout = 100;
    setInterval(function() {
        var status = wpi.digitalRead(pin);
        if(status==1){
            window.location.href="localhost:3000/unlock";
        }
    }, configTimeout);
}

module.exports = new button();