module.exports = function(device, user){
    var sound = require('./sound.js');
    var mongo = require('./../classes/mongo/mongo.js');
    
    var now = new Date();  
    var dia = now.getDate();
    var mes = now.getMonth()+1;
    var ano = now.getFullYear();
    var hora = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
    var data = dia+'/'+mes+'/'+ano+' - '+hora;
    
    var insertObj = {dateTime: data, user: user, device: device};
    
    var Gpio = require('onoff').Gpio,
        lock = new Gpio(20, 'out');
        
    lock.writeSync(1);
    sound();
    mongo.insert(insertObj, function(){console.log('chega, não da mais!')});
    setTimeout(function(){
        lock.writeSync(0);
    },3000);
}