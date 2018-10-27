$(document).ready(function(){
    
    $(".button-toggle-indic").click(function(){
        $("#last").toggle();
        if($("#last").is(":visible")){
            $("*").css("--week-height", "120px");
        }
        else{
            $("*").css("--week-height", "135px");
        }
    });

//  functions to take out the the week and complete with blank space

    $("*[toggleContent]").dblclick(function(){
        var e = $(this).attr('toggleContent');
        $("#content"+e).toggle();
    });
    
});