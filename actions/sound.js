module.exports = function(){
	var Sound = require('node-aplay');

	var music = new Sound('/home/pi/Music/som.wav');
	music.play();

	setTimeout(function () {
		music.pause();
	}, 1000);
	 
	setTimeout(function () {
		music.resume();
	}, 3000);
}