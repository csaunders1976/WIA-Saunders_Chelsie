var ship;



function init() {

    var canvas = document.getElementById("easel");
    var stage= new createjs.Stage(canvas);
    var centerX = canvas.width/2;
    var centerY = canvas.height/2;

    //create sprite sheet

    var ss = new createjs.SpriteSheet({

        //animation variable - allows ut to name different sections of our total sprite sheet

        animations:{
          //written sort of JSON data
            //sequence name
            fly:[0,6],
            explode:[7,11,"fly"]
        },

        //images is a variable that takes the location of our sprite sheet image
        images:["images/Ship-Blink.png"],

        //frames - how do we break up the image?
        //registration point in the center of our image
        // 110 by 80px
        frames:{
            regX:55,
            regY:40,
            height:80,
            width:110
        }
    });//end of sprite sheet

    //wrap the sprite sheet inside of a bitmap animation
    ship = new createjs.BitmapAnimation(ss);

    //center the ship on the screen

    ship.x = centerX;
    ship.y = centerY;


    //plays whole
    //ship.play();
    //add ship to the stage

    ship.gotoAndPlay("fly");
    stage.addChild(ship);

    //setup ticker
    //set our framerate
    createjs.Ticker.setFPS(15);

    createjs.Ticker.addListener(function(){
        stage.update();
    })

} //end of init

function blowUp(){
    ship.gotoAndPlay("explode");
}
