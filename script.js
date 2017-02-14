(function(){
	function appendElemnt(){
		var inputValue = $(".input__form").val();
		$(".input-block").prepend("<div class=\"content\"><input type=\"text\" class=\"input_redact\" value=" + inputValue + " disabled=\"disabled\"><div class=\"save_button\"></div><div class=\"remove_button\"></div><div class=\"delete_button\"></div></div>")
		$(".input__form").val("");
	}
	function removeElement(){
		var contentText = $(this).parent().children("input").removeAttr("disabled").focus();
		$(this).css("height","0px");
		$(".save_button").css("height","25px");
	}
	function saveElement(){
		var contentText = $(this).parent().children("input").attr("disabled","disabled");
		$(this).css("height","0px");
		$(".remove_button").css("height","25px");
	}
	function deleteElement(){
		$(this).parent().remove();
	}

	$(".add_button").on("click", appendElemnt);
	$(".input-block").on("click",".remove_button",removeElement);
	$(".input-block").on("click", ".save_button", saveElement)
	$(".input-block").on("click",".delete_button",deleteElement);
})();