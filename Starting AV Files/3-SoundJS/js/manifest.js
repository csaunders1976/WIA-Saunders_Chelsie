window.onload = function() {

	if (!createjs.Sound.initializeDefaultPlugins()){return;}

	//variable to hold our path to audio files

	var audioPath = "audio/";

	//Create an array of objects, each object is a sound
	//Soundjs calls that a manifest

	var manifest = [
		{id:"Music", src:audioPath+"music.mp3|"+audioPath+"music.ogg"},
		{id:"Thunder", src:audioPath+"Thunder1.mp3|"+audioPath+"Thunder1.ogg"}

	];

	//register the manifest with Soundjs
	createjs.Sound.registerManifest(manifest);

	//listen for the files to load
	createjs.Sound.addEventListener("fileload", handleLoad);

	function handleLoad(event){
		//This will run once each time a file is initioally loaded

		//playing the file
		//createjs.Sound.play(event.src);


	}
	};
function playMusic(){
	createjs.Sound.play("Music");

}
function playThunder(){
	createjs.Sound.play("Thunder");

}