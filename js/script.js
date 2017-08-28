function setSquareAnimation(){
	// Start animation duration
	var duration = 0.1;
	var count = 0.1;

	// Counting durition 
	$(".square").each(function(index){
		$(this).css("animation-delay", duration +"s");
		duration += count;
	});

	setTimeout(function(){
		$(".square").css("font-size", "14px");
	}, 800);

}

function findItemToShow(ell, arr, e, durationHide, durationShow){
	$(arr).each(function(index){
		if($(arr[index]).attr("item") === $(e.target).attr("item")){
			$(ell).hide(durationHide);
			$(this).show(durationShow);
			$(".close-button").show(400);
			console.log($(arr[index]));
		}
	});
}

if($(".square").length > 0){
	setSquareAnimation();
}

var leftItemArr;
var ell;
var squereE;
var currentSlide;
var contentContainer;

$(".square").on("click", function(e){
	currentSquere = $(this);

	$(".main-content_right__item-preview").hide(300);

	var itemArr = $(".main-content").find(".item");
	var ell = $(".item");

	findItemToShow(ell ,itemArr, e, 300, 400);

	if($(".main-content_left-content__item").length > 0){
		leftItemArr = $(".main-content").find(".main-content_left-content__item");
		ell = $(".square");
		squereE = e;

		findItemToShow(ell ,leftItemArr, e, 0, 0);

	}

});

var a;

$(".square-img").on("click", function(){
	if($(this).parent().parent().attr("item") == "1" || $(this).parent().parent().attr("item") == "8" || $(this).parent().parent().attr("item") == "9"){
		return;
	}
	var slideSelector = $(this).attr("slide");
	var slidesContainer = $("." + slideSelector).find(".slider");

	$(".main-content_right .item").hide();
	$(".close-button").hide();
	$(this).parent().parent().hide();
	$(slidesContainer).show();
	$(".back-btn").show();
	
	
	$('.slider').slick({
    	autoplay: true,
    	arrows: false,
    	fade: true,
    	speed: 300
  	});

	contentContainer = $(".slider-content-container").find("." + slideSelector);
	$(contentContainer).show();
	console.log(slidesContainer);

	currentSlide = slidesContainer;
});


$(".close-button").on("click", function(){
	$(".item").hide(200);
	$(".close-button").hide(200);
	$(".main-content_right__item-preview").show(400);

	if($(".main-content_left-content__item").length > 0){
		$(".main-content_left-content__item").hide();
		$(".square").show().css("animation", "none");
	}
});

$(".back-btn").on("click", function(){
	$('.slider').slick("unslick");

	$(currentSlide).hide();

	$(contentContainer).hide();
	$(this).hide();
	$(".close-button").show();

	findItemToShow(ell ,leftItemArr, squereE, 0, 0);


	console.log(leftItemArr);
	console.log(squereE);

	var arrRight = $(".main-content_right").find(".item");

	$(arrRight).each(function(index){
		if($(arrRight[index]).attr("item") === $(squereE.target).attr("item")){
			$(this).show();
		}
	});
});
