$(".scroll-marker").click(function() {
	
    $('html, body').animate({
        scrollTop: $(".services-container").offset().top
    }, 1000);
});

$(".mobile-btn").on("click", function(){

	$(".main-header .main-menu .menu-container").addClass("menu-open");
});

$(".close-menu").on("click", function(){

	$(".main-header .main-menu .menu-container").removeClass("menu-open");
});

$(document).ready(function(){
  $('.slider-container').slick({
    prevArrow: $(".slider-prev"),
    nextArrow: $(".slider-next")
  });
});