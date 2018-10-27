$(document).ready(function(){

    // toggle between 4 or 5 weeks on the month
    $(".button-toggle-fds").click(function () {
        $(".last").toggle();
        if ($(".last").css('display') == 'none') {
            $(".block").css("height", "270");

        }
        else {
            $(".block").css("height", "");
        }
    });

    // toggle to make week have just the menu (like in convention weeks)
    function specialWeekToggle(tema, eLeft , eRight){
        $(eLeft).toggle();
        $(eRight).toggle();
        if ($(eLeft).is(":hidden")) {
            $(tema).css("padding-top", "50px")
            $(tema).css("padding-bottom", "51px");
        }
        else {
            $(tema).css("padding-top", "0px");
            $(tema).css("padding-bottom", "0px");
        }
        
    }
    //all function calls to prepare the preview function ^

    $("#tema1").dblclick( function(){
        specialWeekToggle("#tema1", "#left1", '#right1');
    });

    $("#tema2").dblclick(function () {
        specialWeekToggle("#tema2", "#left2", '#right2');
    });
    
    $("#tema3").dblclick(function () {
        specialWeekToggle("#tema3", "#left3", '#right3');
    });
    
    $("#tema4").dblclick(function () {
        specialWeekToggle("#tema4", "#left4", '#right4');
    });
    
    $("#tema5").dblclick(function () {
        specialWeekToggle("#tema5", "#left5", '#right5');
    });



    catImage = localStorage.getItem('fdsImage');
    $("*").css("--image-fds", "url("+catImage+")");

    catColor = localStorage.getItem('fdsColor');
    $("*").css("--main-fds-bg-color", catColor);


    

});