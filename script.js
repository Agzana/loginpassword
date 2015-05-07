var show = function () {
	$("#password").attr('type', 'text');
    $("#show").attr('class','glyphicon glyphicon-eye-close');
};

var hide = function () {
	$("#password").attr('type', 'password');
    $("#show").attr('class', 'glyphicon glyphicon-eye-open');
}

var showpassword = function () {
    if ($("#password").attr('type')==="password") {
    show(); 
	setTimeout("hide()",5000);
} else {
    hide();
}
};
      
$("#show").click(showpassword);
