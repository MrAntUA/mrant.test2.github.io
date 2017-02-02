var s = Snap("#svg");
//********************************************
var greyWindows1 = s.select("#greyWindows1");
greyWindows1.transform("s0 0");
var greyWindows2 = s.select("#greyWindows2");
greyWindows2.transform("s0 0");
var greyWindows3 = s.select("#greyWindows3");
greyWindows3.transform("s0 0");
var greyWindows4 = s.select("#greyWindows4");
greyWindows4.transform("s0 0");
var greyWindows5 = s.select("#greyWindows5");
greyWindows5.transform("s0 0");
var greyWindows6 = s.select("#greyWindows6");
greyWindows6.transform("s0 0");

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

function firstBuildGrow(){
	grayBuild1.animate({y : -250}, 2000,mina.easeinout);
	grayBuild2.animate({y : -525}, 1000,mina.easeinout);
	grayBuild3.animate({y : -250}, 5000,mina.elastic);
	grayBuild4.animate({y : -370}, 2000,mina.easeinout);
	grayBuild5.animate({y : -420}, 2000,mina.easeinout);
	grayBuild6.animate({y : -970}, 2000,mina.easeinout, buildWindowsMain);
}

function buildWindowsMain(){
	greyWindows1.animate({"transform" : "s1 1"}, 500, mina.easeinout, secondBuildWindows);
}

function secondBuildWindows(){
	greyWindows2.animate({"transform" : "s1 1"}, 1000, mina.elastic);
	greyWindows3.animate({"transform" : "s1 1"}, 1000, mina.elastic, thirdBuildWindows);
}

function thirdBuildWindows(){
	greyWindows4.animate({"transform" : "s1 1"}, 200, fouthBuildWindows);
}

function fouthBuildWindows(){
	greyWindows5.animate({"transform" : "s1 1"}, 200, fifthBuildWindows);
}

function fifthBuildWindows(){
	greyWindows6.animate({"transform" : "s1 1"}, 200, moveBgCity);
}

//**************************************************

var bgCity = s.select("#rect8518");
bgCity.transform("t1000 0");

var smoleBgCity = s.select("#rect9175");
smoleBgCity.transform("t-1000 0");

function moveBgCity(){
	bgCity.animate({"transform":"t0 0"}, 1500, moveSmoleBgCity);
}

function moveSmoleBgCity(){
	smoleBgCity.animate({"transform":"t0 0"}, 500);
}

//**************************************************

var someBuild = s.select("#g3671");
var someBuildArr = someBuild.selectAll("rect");

someBuildArr[0].attr({y:-200});
someBuildArr[1].attr({width:0});
for(var i=2; i<someBuildArr.length; i++){
	someBuildArr[i].attr({width:0});
}

(function renderSomeBuild(){
	someBuildArr[1].animate({width:130}, 1000);
	for(var i=2; i<someBuildArr.length; i++){
		someBuildArr[i].animate({width:110}, (i+3) * 200);
	}
	someBuildArr[0].animate({y:62}, 500);
})();






firstBuildGrow();