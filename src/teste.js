
$("*[bind]").on('change keyup', function (e) {
    var to_bind = $(this).attr('bind');
    $("*[bind='" + to_bind + "']").html($(this).val());
    $("*[bind='" + to_bind + "']").val($(this).val());
})
$("div[bind]").bind("DOMSubtreeModified", function () {
    var to_bind = $(this).attr('bind');
    $("*[bind='" + to_bind + "']").html($(this).html());
    $("*[bind='" + to_bind + "']").val($(this).html());
}); 
