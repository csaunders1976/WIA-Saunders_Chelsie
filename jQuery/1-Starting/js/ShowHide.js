$(function() {
    //Add a click function to our button

    $("#hide").click(function(){
        $("#theDiv").hide(1000, function(){

            alert("Div is now hidden!");
            $("#theDiv").css("background-color", "red");
        });


    });

    $("#show").click(function(){

        $("#theDiv").show(2000, function(){

            $("#theDiv").css("background-color", "green");

        });

    });

    $("#toggle").click(function(){

        $("#theDiv").toggle("slow");

    });



});


