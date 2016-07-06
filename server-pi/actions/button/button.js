function button(){
    this.wpi = require('wiring-pi'); 
}

button.prototype.configIntput = function(pin){
    // GPIO pin of the led
    var configPin = pin;
    this.wpi.setup('wpi');
    this.wpi.pinMode(configPin, this.wpi.INTPUT);
}

button.prototype.read = function(pin){
    var configTimeout = 100;
    setInterval(function() {
        var status = this.wpi.digitalRead(pin);
        if(status==1){
            window.location.href="localhost:3000/unlock";
        }
    }, configTimeout);
}

module.exports = new button();