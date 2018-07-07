$(".scroll-marker").click(function() {
	
    $('html, body').animate({
        scrollTop: $(".services-container").offset().top
    }, 1000);
});

$(document).ready(function(){
  $('.slider-container').slick({
    prevArrow: $(".slider-prev"),
    nextArrow: $(".slider-next")
  });
});