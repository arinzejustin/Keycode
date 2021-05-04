	$(document).keyup(function(e){
		if (e.keyCode == 112) {
			e.preventDefault();
		}
	});
	document.addEventListener("keydown", function (event) {
$('#click').html(event.which).css('font-size','75px');
$('#ctrl').html(event.ctrlKey);
$('#keycode').html(event.keyCode);
$('#alt').html(event.altKey);
$('#shift').html(event.shiftKey);
$('#which').html(event.which);
$('#key').html(event.key);
});
