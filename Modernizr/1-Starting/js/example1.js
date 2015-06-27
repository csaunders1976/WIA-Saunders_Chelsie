// There is a warning Mondernizr.load use <img> to pre-loads resources

Modernizr.load({
    test: Modernizr.canvas,
    yep:["js/success.js","js/DrawText.js"],
    nope: "includes/webshim/minified/polyfiller.js",
    complete:function(){
//this function will run after the JS is loaded based on either case
        console.log("The test is complete");

        if(!Modernizr.canvas){
            Modernizr.load("js/fail.js");
            Modernizr.load("js/DrawText.js");
        }
}

});








/*
if(Modernizr.canvas){
    //Canvas is supported
    var theCanvas = document.getElementById("Canvas1");
    var ctx = theCanvas.getContext("2d");

    //Draw some text on our canvas
    ctx.font = "25pt Georgia";
    ctx.fillText("Canvas is supported!", 20, 60);

}else{
    //Canvas is not supported
    //Polyfill would go here


}

console.log(Modernizr);


if(Modernizr.draganddrop){
    ctx.font = "25pt Georgia";
    ctx.fillText("Drag and Drop Works!!", 20, 120);

}else{
    //Polyfills would go

}*/
