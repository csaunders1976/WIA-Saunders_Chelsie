var ctx;
var canvas = document.getElementById('canvas');
ctx=canvas.getContext("2d");

//Create a variable to keep track of our count
var count=0;

//variables s & y cooridinates where in the sprite sheet is our frame

var x;
var y;
var xPos=0;
var yPos=0;

//Import our image
var img = new Image();
img.src ="images/doggy.png";

img.onload=draw;
function draw(){
    //Request an animation frame, and pass this function to create a loop
    requestAnimationFrame(draw);

    //clear the rec on our canvas
    ctx.clearRect(0,0,800,600);

    //Setup the count, x and y
    //Sprite sheet has 9 coloumns, 150 frames total with 213 height 201

    x = (count%9)*213;

    //gives the row
    y = Math.floor(count/9)*201;

    //draw image onto canvas

    ctx.drawImage(img, x, y, 213, 201, xPos++,yPos++, 213, 201);

    if(count==149){
        //reset  the count;
        count=0;
    }else{
        count++
    }
}