window.onload = function() {
	
	//first create our stage

    var canvas = document.getElementById("canvas1");

    var stage = new createjs.Stage(canvas);

	//Create a blue circle
    var circleGraphic = new createjs.Graphics();

    circleGraphic.beginFill("blue");
    circleGraphic.drawCircle(0,0,50);

    //create our shape

    //shape is a display object that handles vector graphics
    var circleShape = new createjs.Shape(circleGraphic);

    //access some of the shapes properties
    circleShape.x = 50;
    circleShape.y = 50;

    //add shape to stage's display list'

    stage.addChild(circleShape);

    //In order to show on the screen we have to update the stage
    stage.update();
	
			
}