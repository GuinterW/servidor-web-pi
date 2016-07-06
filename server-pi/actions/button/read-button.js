function buttonRead(){
    var wpi = require('wiring-pi');

    // GPIO pin of the led
    var configPin = 11;
    var configTimeout = 100;

    wpi.setup('wpi');
    wpi.pinMode(configPin, wpi.INTPUT);

    setInterval(function() {
        var status = wpi.digitalRead(11);
        if(status==1){
            window.location.href="localhost:3000/unlock";
        }
    }, configTimeout);
}

module.exports = new buttonRead();