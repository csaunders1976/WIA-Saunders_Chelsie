/*
     Name: Chelsie Saunders
     Date: June 2, 2015
     Class & Section:  WIA-01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP*/

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message

 if(Modernizr.canvas){
	//Canvas is supported



 /*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
     var Canvas1 = document.getElementById("Canvas1");
     var ctx1 = Canvas1.getContext("2d");

     ctx1.strokeStyle = "black";
     ctx1.fillStyle = "blue";
     ctx1.lineWidth = 10;

     //Draw the rectangle
     ctx1.strokeRect(0, 0, 50, 100);
     ctx1.fillRect(0, 0, 50, 100);



/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
     var Canvas2 = document.getElementById("Canvas2");
     var ctx2 = Canvas2.getContext("2d");

     ctx2.strokeStyle= "black";
     ctx2.fillStyle = "rgba(190, 30, 45, .5)";
     ctx2.lineWidth = 5;


     //Full Circle
     var degrees = 360;
     var radians = (degrees/180)*Math.PI;

     ctx2.beginPath();
     ctx2.arc(50, 50, 20, 0, radians);
     ctx2.fill();
     ctx2.stroke();


     /*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
     var Canvas3 = document.getElementById("Canvas3");
     var ctx3 = Canvas3.getContext("2d");

     ctx3.fillStyle= "yellow";
     ctx3.lineWidth = 5;

     //Draw an open path
     ctx3.beginPath();
     ctx3.moveTo(100,100);
     ctx3.lineTo(182,100);
     ctx3.lineTo(208,22);
     ctx3.lineTo(233,100);
     ctx3.lineTo(315,100);
     ctx3.lineTo(250,150);
     ctx3.lineTo(275,227);
     ctx3.lineTo(208,178);
     ctx3.lineTo(141,227);
     ctx3.lineTo(168,148);
     ctx3.closePath();
     ctx3.fill();




/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
     var Canvas4 = document.getElementById("Canvas4");
     var ctx4 = Canvas4.getContext("2d");

     ctx4.fillStyle = "blue";
     ctx4.lineWidth = 5;

     ctx4.beginPath();
     ctx4.moveTo(50,200);

     ctx4.bezierCurveTo(100,50, 400, 50, 450, 200);
     ctx4.quadraticCurveTo(400,150, 350, 200);
     ctx4.quadraticCurveTo(300,150, 250, 200);
     ctx4.quadraticCurveTo(200,150, 150, 200);
     ctx4.quadraticCurveTo(100,150, 50, 200);

     ctx4.fill();


/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
     var Canvas5 = document.getElementById("Canvas5");
     var ctx5 = Canvas5.getContext("2d");

     var theString = "Here is some text";


     //Style the font
     ctx5.font = "25pt Arial";
     ctx5.fillStyle = "green";
     ctx5.fillText(theString, 30, 70);





/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
     var Canvas6 = document.getElementById("Canvas6");
     var ctx6 = Canvas6.getContext("2d");
     var  srcImg = document.getElementById("img1");

     ctx6.drawImage(srcImg, 0,0);
     ctx6.drawImage(srcImg, 0, 1000,3300/2,1088/2);

     ctx6.drawImage(srcImg, 290, 500, 340, 500,10, 1600,340, 500 );



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
     var Canvas7 = document.getElementById("Canvas7");
     var ctx7 = Canvas7.getContext("2d");

     ctx7.save();
     ctx7.strokeStyle= "rgba(255, 255, 150, .5)";
     ctx7.lineWidth = 30;
     radians=(Math.PI/180)*20;
     ctx7.translate(ctx7.canvas.width/2, ctx7.canvas.height/2);


     for( degrees=0; degrees<=360; degrees+=20){
         ctx7.beginPath();
         ctx7.moveTo(0,0 );
         ctx7.lineTo(400, 0);
         ctx7.stroke();
         ctx7.rotate(radians);
     }
    ctx7.restore();
     ctx7.fillStyle = "lightblue";
     ctx7.fillRect(0, ctx7.canvas.height/2, ctx7.canvas.width, ctx7.canvas.height/2);

     if (ctx7) {

         ctx7.strokeStyle= "rgba(255, 255, 150, .5)";

         for(var i=0; i<10; i++){
             ctx7.beginPath();
             ctx7.lineWidth = 10-i;
             ctx7.moveTo(0,160+i*15);
             ctx7.lineTo(400,160+i*15);
             ctx7.stroke();
         }
     }

     ctx7.fillStyle= "lightblue";
     ctx7.lineWidth = 5;


     ctx7.beginPath();
     ctx7.moveTo(0,ctx7.canvas.height/2);
     ctx7.lineTo(150,ctx7.canvas.height/2);
     ctx7.lineTo(0,300);
     ctx7.closePath();
     ctx7.fill();

     ctx7.beginPath();
     ctx7.moveTo(400,ctx7.canvas.height/2);
     ctx7.lineTo(400-150,ctx7.canvas.height/2);
     ctx7.lineTo(400,300);
     ctx7.closePath();
     ctx7.fill();


 }else {
     //Canvas is not supported
     //Polyfill would go here
     var message = document.getElementById("container");
     message.innerHTML = "You will need to update your browser for canvas to work!";


 }

console.log(Modernizr);


