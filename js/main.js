/* Custom tabs */

$(".tab-item").on('click', function(){
	$(".tab-item").removeClass('active');
	$(this).addClass('active');
});

/* Toggle list of users */

$(".more").on("click", function(){

	if($(this).closest('li').has('ul').length){

		var currentParent = $(this).closest('li'),
			currentItem = $(this).closest('.item');

		/* Reset styling the lines */
		$('.teams-container .item').removeClass('last-open');
		$('.teams-container li').removeClass('last-open');

		if($(this).hasClass('open')){

			$(this).removeClass('open');
			$(currentParent).removeClass('open');
			$(currentParent).find('li').removeClass('open');
			$(currentParent).find('.more').removeClass('open');

		}else{

			$(this).addClass('open');
			$(currentParent).addClass('open');

			/* Styling the lines */
			$(currentItem).next().children('li').children('.item').addClass('last-open')
			$(currentItem).addClass('last-open');
			$(currentItem).parent().addClass('last-open');
			$(currentItem).parents('ul').prev().addClass('last-open');
			
			if($(currentParent).children('ul').children('.new').length){
				$(currentParent).addClass('short-line')

			}
		}
	}

});