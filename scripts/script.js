/**************** Paralax 1 (With JQuery) ************/

$(".container-1").mousemove(function(e){
	// take now position of cursor
	var position = e.pageX;
	// and count animation coefficient
	position /= 100;
	// change value of pripwrty for animation
	$(".container-1__layer-2").css("transform", "translateX(" + position + "px)"); 
	$(".container-1__layer-1").css("transform", "translateX( -" + position + "px)");
	$(".container-1__layer-3").css("transform", "translateX( -" + position + "px)");
})

/**************** Some animation with JQuery ************/

// Take mark
var markPosition = $(".text-mark").offset();
var animPosition = Math.floor(markPosition.top);
$(document).scroll(function(){
	// Take verticle center of the window
	var windowPosition = $(document).scrollTop() + ($(window).height() / 2);
	// Whatch when user go closer to the our block
	if(windowPosition > animPosition){
		// Show our articles with some animation
		$(".container-4__some-block").animate({
			"top"    : "0px",
			"opacity" : "1"
		}, 1000);
	}
})
