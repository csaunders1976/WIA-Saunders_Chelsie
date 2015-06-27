window.onload = function() {

    //First we canvas and stage

    var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);

    var shape = new createjs.Shape();

    shape.graphics.beginStroke("purple");

    //setStrokeStyle(width, caps, joints, miter)
    shape.graphics.setStrokeStyle(10, "round","miter",5);

    //starting point
    //moveTo()
    shape.graphics.moveTo(25, 25);
    shape.graphics.lineTo(250, 25);

    //Move to 50,50 and then a quad curve
    shape.graphics.moveTo(50,50);

    //quad curve    quadraticCurveTo(cpx, cpy, x, y);
    //shape.graphics.quadraticCurveTo(50,175, 250, 250);

    // Arc To - arcTo(x1, y1, x2, y2, radius)
    //shape.graphics.arcTo(100, 50, 100, 200, 60);

    //Bezier Curve
    //bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

    shape.graphics.bezierCurveTo(100, 50, 250, 50, 250, 250);
    shape.graphics.lineTo(50, 250);



    stage.addChild(shape);

    stage.update();


	

	
	
}