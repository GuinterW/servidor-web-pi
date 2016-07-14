module.exports = function(){
	var Gpio = require('onoff').Gpio,
    	lock = new Gpio(20, 'out'),
    	vcc = new Gpio(26, 'out'),
    	rele = new Gpio(16, 'out');
    
    vcc.writeSync(1);
    rele.writeSync(1);
	lock.writeSync(1);
	setTimeout(function(){
		lock.writeSync(0);
	},3000);
}