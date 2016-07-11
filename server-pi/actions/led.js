module.exports = function(){
	var Gpio = require('onoff').Gpio,
    	led = new Gpio(4, 'out');
    
	led.writeSync(1);
	setTimeout(function(){
	led.writeSync(0);
	},3000);
}