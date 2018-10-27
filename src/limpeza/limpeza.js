var groupServes = ['Diego', 'Laercio', 'Jonas', 'Geison'];
var groups = ['Luiz Viana', 'Jardim Jordanópolis', 'Pereira Taques', 'Jardim Presidente' ]
var altJorda = ['Jardim Jordanopolis'];

$(document).ready(function(){

    var now = new Date();
    var increaseMonth = JSON.parse(localStorage.getItem('plusMonth'));
    var month = now.getMonth() + increaseMonth;

    var months = [];
    var writeMonths = [];

    // writes the four months on title of them
    for (var i=0; i<4; i++){
        if (month < 12)
        {
            months[i] = month++;
        }
        else{
            month = 0;
            months[i] = month++;
        }
        
        switch (months[i]) {
            case (0): writeMonths[i] = "Janeiro";
                break;

            case (1): writeMonths[i] = "Fevereiro";
                break;

            case (2): writeMonths[i] = "Março";
                break;

            case (3): writeMonths[i] = "Abril";
                break;

            case (4): writeMonths[i] = "Maio";
                break;

            case (5): writeMonths[i] = "Junho";
                break;

            case (6): writeMonths[i] = "Julho";
                break;

            case (7): writeMonths[i] = "Agosto";
                break;

            case (8): writeMonths[i] = "Setembro";
                break;

            case (9): writeMonths[i] = "Outubro";
            break;

            case (10): writeMonths[i] = "Novembro";
                break;

            case (11): writeMonths[i] = "Dezembro";
                break;
        }
    }

    for( var i = 0; i < 4; i++){
        $("#month" + i).html(writeMonths[i]);
    }


    // makes the last week toggle when clicking on the month h3 subtop
    var margin = 10;
    var increment = 2.1;
    $("#h3-month1").click(function(){
        $("#month1-line5").toggle();
        if ($("#month1-line5").is(":visible")){
            margin = margin - increment;
            $(".line").css("margin-top", margin+"px");

            
        }
        else {
            margin = margin + increment;
            $(".line").css("margin-top", margin+"px");
        }
    });
    $("#h3-month2").click(function () {
        $("#month2-line5").toggle();
        if ($("#month2-line5").is(":visible")) {
            margin = margin - increment;
            $(".line").css("margin-top", margin + "px");


        }
        else {
            margin = margin + increment;
            $(".line").css("margin-top", margin + "px");
        }
    });
    $("#h3-month3").click(function () {
        $("#month3-line5").toggle();
        if ($("#month3-line5").is(":visible")) {
            margin = margin - increment;
            $(".line").css("margin-top", margin + "px");


        }
        else {
            margin = margin + increment;
            $(".line").css("margin-top", margin + "px");
        }
    });
    $("#h3-month4").click(function () {
        $("#month4-line5").toggle();
        if ($("#month4-line5").is(":visible")) {
            margin = margin - increment;
            $(".line").css("margin-top", margin + "px");


        }
        else {
            margin = margin + increment;
            $(".line").css("margin-top", margin + "px");
        }
    });


    //  makes word "semanal" toggle when clicking on the correspondent letter "e"

    $("*[semanalToggle]").click(function(){
        var attrSemanalToggle = $(this).attr('semanalToggle');
        $("[semanalToggleT='"+attrSemanalToggle+"']").toggle();
    });

    // makes serve name appear instantaneously when the group name is processed
    
    $("*[trigger]").change(function () {
        var triggerTo = $(this).attr('trigger');
        var groupName = $(this).val();
        
        for ( var i = 0; i < groups.length; i++){
            if(groupName == groups[i]){
                serveName = groupServes[i];
            }
        }
        try{
            $("[triggerTarget ='" + triggerTo + "']").html(serveName);
        }
        catch (err) {
            if (err instanceof ReferenceError) {
                alert("O grupo '"+groupName+"' Não está definido");
                serveName = null;
            }
        }
    });
});