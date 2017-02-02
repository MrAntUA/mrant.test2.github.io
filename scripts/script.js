var s = Snap("#svg");

var grayBuild1 = s.select("#rect7931");
grayBuild1.attr({y:1000});
var grayBuild2 = s.select("#rect7781");
grayBuild2.attr({y:1000});
var grayBuild3 = s.select("#rect7609");
grayBuild3.attr({y:1000});
var grayBuild4 = s.select("#rect7605");
grayBuild4.attr({y:1000});
var grayBuild5 = s.select("#rect7699");
grayBuild5.attr({y:1000});
var grayBuild6 = s.select("#rect7679");
grayBuild6.attr({y:1000});

(function firstBuild(){
	grayBuild1.animate({y : -250}, 2000,mina.easeinout);
	grayBuild2.animate({y : -525}, 1000,mina.easeinout);
	grayBuild3.animate({y : -250}, 2000,mina.easeinout);
	grayBuild4.animate({y : -370}, 2000,mina.easeinout);
	grayBuild5.animate({y : -420}, 2000,mina.easeinout);
	grayBuild6.animate({y : -970}, 2000,mina.easeinout);
})();