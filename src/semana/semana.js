$(document).ready(function(){

    $(".button-toggle-semana").click(function () {
        $(".special").toggle();
        if ($(".special").css('display') == 'none') {
            $(".min-special").html("15");
        }
        else {
            $(".min-special").html("");
        }
    });

    catImage = localStorage.getItem('weekImage');
    $("*").css("--image-week", "url(" + catImage + ")");

    catColor = localStorage.getItem('weekColor');
    $("*").css("--main-week-bg-color", catColor);

});