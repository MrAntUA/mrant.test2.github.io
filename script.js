(function main(){
	var i = 0;
	var j = 10;
	function createElements(){
		for(i ; i < j; i++){
			$("body").append("<div class=\"element\"></div>");
			setColor($(".element")[i]);
			moveElement($(".element")[i]);
		}
		j += 1;
	}

	function setColor(element){
		var rand = Math.round(100 - 0.5 + Math.random() * (999 - 100 + 1));
		$(element).css("background-color", "#" + rand);
	}

	function moveElement(element){
		var randPosX = Math.round(-2000 - 0.5 + Math.random() * (2000 - (-2000) + 1));
		var randPosY = Math.round(-2000 - 0.5 + Math.random() * (2000 - (-2000) + 1));
		var randSpeed = Math.round(3 - 0.5 + Math.random() * (10 - (3) + 1));
		var elTop = parseInt($(element).css("top"));
		var elLeft = parseInt($(element).css("left"));
		$(element).css({"top": elTop + randPosX + "px", "left": elLeft + randPosY + "px", "opacity":"0", "transition": randSpeed + "s"});
	}

	setInterval(createElements, 100);
	//createElements();

})();
