window.onload = function() {
	
	if (!createjs.Sound.initializeDefaultPlugins()){return;};

	//SoundJs has the ability to preload sounds
	createjs.Sound.registerSound({id:"soundId", src:"audio/music.mp3|audio/music.ogg"});
	//Listion fo the file to load

	createjs.Sound.addEventListener("fileload", handleFileLoad);

	function handleFileLoad(event){
		//a sound has been loaded

		console.log("preloaded:", event.src);

		//Play the loaded sound
		//createjs.Sound.play(event.src);

	}
	
	};
function playMusic(){
	//Play the sound when button is clicked
	createjs.Sound.play('soundId');
}
