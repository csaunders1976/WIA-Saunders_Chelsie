window.onload = function() {

    //First we will get our canvas and create a stage

    var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);

    //Draw a rectangle

    // First create a new shape

    var rect1 = new createjs.Shape();

    //Basic fill
    //rect1.graphics.beginFill("purple");

    //Declare a fill using : name, hex color, rgb, rgba, hsl, hsla
    //rect1.graphics.beginFill("rgb(162, 216, 255)");
    //rect1.graphics.beginFill(createjs.Graphics.getRGB(162,216,255,.5));

    // Linear Gradients

    //rect1.graphics.beginLinearGradientFill(["yellow","purple", "red"], [0,0.5,1], 50,50, 50, 150);

    //Radial Gradients

    rect1.graphics.beginRadialGradientFill(["yellow","green", "red"], [0,0.2,1], 100,100, 0, 100, 100, 100);


    //Draw the rectangle
    //fillRect or rect
    rect1.graphics.rect(50,50, 100, 100);

    //Add to the stage
    stage.addChild(rect1);

    //To draw on the canvas, update the stage
    stage.update();



}