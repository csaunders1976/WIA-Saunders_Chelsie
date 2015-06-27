// Create a variable to hold our video

var vid;
window.onload=function(){

    //link to video
    vid = document.getElementById("vid");
};

function pauseToggle(){

    //Test the video and determine if it is paused

    // .paused is a boolean property

    if(vid.paused){
        //Play the video
        vid.play();

    }else{
        //Pause the video
        vid.pause();
    }
}
function clicked(){

    //currentTime = current play tme i secondes
    vid.currentTime += 2;
}