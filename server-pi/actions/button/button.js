var gpio = require('rpi-gpio');

function button(){
    
}

button.prototype.configInput = function(pin, callback){
    gpio.setup(pin, gpio.DIR_IN, callback);
}

button.prototype.configOutput = function(pin, callback){
    gpio.setup(pin, gpio.DIR_OUT, callback);
}

button.prototype.write = function(pin, status, callback){
    gpio.write(pin, status, callback);
}

button.prototype.read = function(pin, callback){
    var configInterval = 300;
    setInterval(function() {
        gpio.read(pin, callback);
    }, configInterval);
}

button.prototype.unlock = function(){
    this.read(18, function(err, value){
        /*if(value!==undefined){
            console.log('The value is : ' + value);
        }*/
        if(value==true){
            var configPin = 7;
            /*var bota1 = new button();
            bota1.configInput(configPin, function(err){
                var bota1 = new button();
                bota1.write(configPin, true, function(err){
                    var bota1 = new button();
                    bota1.delayWrite(configPin, false, 3000);
                });
            });*/
            gpio.setup(configPin, gpio.DIR_OUT, function(err){
                gpio.write(configPin, true, function(err){
                    var now = new Date();  
                    var dia = now.getDate();
                    var mes = now.getMonth()+1;
                    var ano = now.getFullYear();
                    var hora = '['+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+']';
                    var data = 'Ativado em: '+dia+'/'+mes+'/'+ano+' - '+hora;
                    console.log(data);
                    setTimeout(function(){
                        gpio.write(configPin, false);
                    }, 3000);
                });
            });
        }
    });
}

button.prototype.delayWrite = function(pin, status, time){
    setTimeout(function(){
        gpio.write(pin, status);
    }, time);
}

module.exports = new button();