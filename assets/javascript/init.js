$(document).ready(function() {

	$(".menu-icon").click(function() {
		$(".menu-icon-top").toggleClass("on");
		$(".menu-icon-middle").toggleClass("on");
		$(".menu-icon-bottom").toggleClass("on");

		$('#menu').toggleClass("active");

		if($('#menu').hasClass("active")) {
			$('.menu-icon').addClass("fixed");
		} else {
			$('.menu-icon').removeClass("fixed");
		}
	});

	$(".item").click(function() {
		$(".item").not(this).removeClass("active");
		$(this).toggleClass("active");
	});

})