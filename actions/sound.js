module.exports = function(){
<<<<<<< 08c1cccc2a746be6e514fab04a1e8075c152b4c9
	
=======
<<<<<<< b09b80ec00725ea102de711ae6a9b08fe361ab3d
>>>>>>> conflitos
	var Sound = require('node-aplay');
	var music = new Sound('/home/pi/Music/som.wav');

	music.play();

	setTimeout(function(){
		music.pause();
	}, 1000);
	
	/*
	setTimeout(function(){
		music.resume();
	}, 3000);
<<<<<<< 08c1cccc2a746be6e514fab04a1e8075c152b4c9
	*/
=======
=======
    var Sound = require('node-aplay');

    var music = new Sound('/home/pi/Music/som.wav');
    music.play();

    setTimeout(function () {
        music.pause(); // pause the music after five seconds 
    }, 5000);
     
    setTimeout(function () {
        music.resume(); // and resume it two seconds after pausing 
    }, 7000);
>>>>>>> mongo
>>>>>>> conflitos
}