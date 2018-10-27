$(document).ready(function(){

    var increaseMonth = 0;
    var now = new Date();

    var year = now.getFullYear();
    
    $(".year").html(year);
    
    var writeMonth;
    increaseMonth = JSON.parse(localStorage.getItem('plusMonth'));
    var month = now.getMonth() + increaseMonth;
    switch(month){
        case(0): writeMonth =  "Janeiro";
        break;

        case (1): writeMonth = "Fevereiro";
        break;

        case (2): writeMonth = "Março";
        break; 

        case (3): writeMonth = "Abril";
        break;
        
        case (4): writeMonth = "Maio";
            break;
        
        case (5): writeMonth = "Junho";
            break;
        
        case (6): writeMonth = "Julho";
            break;
        
        case (7): writeMonth = "Agosto";
            break;

        case (8): writeMonth = "Setembro";
        break;

        case (9): writeMonth = "Outubro";
        break;

        case (10): writeMonth = "Novembro";
        break;

        case (11): writeMonth = "Dezembro";
        break;
        
    }
    $(".month").html(writeMonth);

    $("#form").on("submit", function(){
        
        if($("#fds-bg-image").val().length > 0){
            var fdsImage = $("#fds-bg-image").val();
            localStorage.removeItem('fdsImage');
            localStorage.setItem('fdsImage', fdsImage);
        }

        if($("#week-bg-image").val().length > 0){
            var weekImage = $("#week-bg-image").val();
            localStorage.removeItem('weekImage')
            localStorage.setItem('weekImage', weekImage);
        }

        if ($("#fds-bg-color").val().length > 0) {
            var fdsColor = $("#fds-bg-color").val();
            localStorage.removeItem('fdsColor');
            localStorage.setItem('fdsColor', fdsColor);
        }

        if ($("#week-bg-color").val().length > 0) {
            var weekColor = $("#week-bg-color").val();
            localStorage.removeItem('weekColor');
            localStorage.setItem('weekColor', weekColor);
        }

        if ($("#plus-month").val().length > 0) {
            var plusMonth = $("#plus-month").val();
            localStorage.removeItem('plusMonth');
            localStorage.setItem('plusMonth', plusMonth);
        }
    });

    // ONE way data binding. To work you should put the "bind" property with a name on HTML tag,
    // and the same name plus "Target" for the command know where to bind the Text.
    // ex: <something bind="input"></something>
    // <somethingelse bind="inputTarget"></somethingelse>

    $("*[bind]").keyup(function () {
        var toBind = $(this).attr('bind');
        $("[bind='" + toBind +"Target']").html($(this).html());
    });
});




