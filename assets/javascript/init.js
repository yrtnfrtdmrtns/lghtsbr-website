$(document).ready(function() {

	$(".menu-icon").click(function() {
		$('#responsive-nav').toggleClass("active");
	});

	$(".item").click(function() {
		$(".item").not(this).removeClass("active");
		$(this).toggleClass("active");
	});

})