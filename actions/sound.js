module.exports = function(){
	var Sound = require('node-aplay');

	var music = new Sound('/home/pi/Music/som.wav');
	music.play();

	setTimeout(function () {
		music.pause();
	}, 5000);
	 
	setTimeout(function () {
		music.resume();
	}, 5000);
}