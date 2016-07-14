var Sound = require('node-aplay');

var music = new Sound('/home/pi/Music/som.wav');
music.play();

setTimeout(function () {
	music.pause(); // pause the music after five seconds 
}, 5000);
 
setTimeout(function () {
	music.resume(); // and resume it two seconds after pausing 
}, 7000);