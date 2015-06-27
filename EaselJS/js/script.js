

function init() {
	var canvas = document.getElementById("easel");
	var stage = new createjs.Stage(canvas);
	var centerX = canvas.width/2;
	var centerY = canvas.height/2;

	//varible to hold our animation

	//setup our sprite sheet

	var swirl;

	var ss=new createjs.SpriteSheet({
		images:["images/sonic.png"],
		frames:{
			height:100,
			width:100,
			regX:50,
			regY:50

		}
	});

	//after we set up the sprite sheet...wrip it inside of a bitmap anination
	swirl = new createjs.BitmapAnimation(ss);

	swirl.x = centerX;
	swirl.y = centerY;

	swirl.play();
	stage.addChild(swirl);
	createjs.Ticker.setFPS(20);

	createjs.Ticker.addListener(function(){
		stage.update();

	});

	

	
	
} //end of init

	