var wpi = require('wiring-pi');

function button(){
     var url = "localhost:3000/unlock";
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
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", this.url, false);
            xmlhttp.send(null);
        }
    }, configTimeout);
}

module.exports = new button();