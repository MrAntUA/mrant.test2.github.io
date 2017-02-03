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
	switchLight();
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
		someBuildArr[i].animate({width:110}, (i+3) * 200, mina.elastic);
	}
	someBuildArr[0].animate({y:62}, 800);
})();


//*****************************************************

var anotherBuild = s.select("#g2982");
var anotherBuildArr = anotherBuild.selectAll("rect");

anotherBuildArr[0].attr({y:-200});
anotherBuildArr[1].attr({width:0});
for (var i = 2; i<anotherBuildArr.length-2; i++) {
	anotherBuildArr[i].attr({height:0});
}
anotherBuildArr[8].attr({y:1000});
anotherBuildArr[9].attr({y:1000});

(function renderanotherBuildArr(){
	anotherBuildArr[0].animate({y:68}, 1000);
	anotherBuildArr[1].animate({width:90}, 1000);
	for (var i = 2; i<anotherBuildArr.length - 2; i++) {
		anotherBuildArr[i].animate({height:297}, i*250);
	}
	anotherBuildArr[8].animate({y:45}, 1500);
	anotherBuildArr[9].animate({y:5}, 1200);
})();

var tree1 = s.select("#g9087");
var tree1Arr = tree1.selectAll("path");
deleteTrees(tree1Arr);
renderTrees(tree1Arr);

var tree2 = s.select("#g8806");
var tree2Arr = tree2.selectAll("path");
deleteTrees(tree2Arr);
renderTrees(tree2Arr);

var tree3 = s.select("#g8973");
var tree3Arr = tree3.selectAll("path");
deleteTrees(tree3Arr);
renderTrees(tree3Arr);

var tree4 = s.select("#g8945");
var tree4Arr = tree4.selectAll("path");
deleteTrees(tree4Arr);
renderTrees(tree4Arr);

var tree5 = s.select("#g9124");
var tree5Arr = tree5.selectAll("path");
deleteTrees(tree5Arr);
renderTrees(tree5Arr);

var tree6 = s.select("#g8967");
var tree6Arr = tree6.selectAll("path");
deleteTrees(tree6Arr);
renderTrees(tree6Arr);

var tree7 = s.select("#g8863");
var tree7Arr = tree7.selectAll("path");
deleteTrees(tree7Arr);
renderTrees(tree7Arr);

var tree8 = s.select("#g9146");
var tree8Arr = tree8.selectAll("path");
deleteTrees(tree8Arr);
renderTrees(tree8Arr);

var tree9 = s.select("#g8951");
var tree9Arr = tree9.selectAll("path");
deleteTrees(tree9Arr);
renderTrees(tree9Arr);

var tree10 = s.select("#g9136");
var tree10Arr = tree10.selectAll("path");
deleteTrees(tree10Arr);
renderTrees(tree10Arr);

var tree11 = s.select("#g9103");
var tree11Arr = tree11.selectAll("path");
deleteTrees(tree11Arr);
renderTrees(tree11Arr);

var tree12 = s.select("#g8819");
var tree12Arr = tree12.selectAll("path");
deleteTrees(tree12Arr);
renderTrees(tree12Arr);

var tree13 = s.select("#g8870");
var tree13Arr = tree13.selectAll("path");
deleteTrees(tree13Arr);
renderTrees(tree13Arr);

function deleteTrees(treeEl){
	for(var i=0;i<treeEl.length;i++){
		treeEl[i].transform("s0 0");
	}
}

function renderTrees(treeEl){
	for(var i=0;i<treeEl.length;i++){
		treeEl[i].animate({"transform":"s1 1"}, 700);
	}
};


var cloud1 = s.select("#path9164");
cloud1.transform("s0 0");
cloud1.animate({"transform":"s1 1"}, 700);

var cloud2 = s.select("#path8663");
cloud2.transform("s0 0");
cloud2.animate({"transform":"s1 1"}, 700);

var cloud3 = s.select("#path8623");
cloud3.transform("s0 0");
cloud3.animate({"transform":"s1 1"}, 700);

var cloud4 = s.select("#path8733");
cloud4.transform("s0 0");
cloud4.animate({"transform":"s1 1"}, 700);


var cloud5 = s.select("#path8731");
cloud5.transform("s0 0");
cloud5.animate({"transform":"s1 1"}, 700);


var cloud6 = s.select("#path8727");
cloud6.transform("s0 0");
cloud6.animate({"transform":"s1 1"}, 700);


var cloud7 = s.select("#path8623");
cloud7.transform("s0 0");
cloud7.animate({"transform":"s1 1"}, 700, moveCloud);

function moveCloud(){
	cloud2.animate({"transform":"t500 0"}, 5000);
	cloud3.animate({"transform":"t500 0"}, 5000);

	cloud4.animate({"transform":"t-500 0"}, 5000);
	cloud5.animate({"transform":"t-500 0"}, 5000, moveCloudRevers);

	function moveCloudRevers(){
		cloud2.animate({"transform":"t-500 0"}, 5000);
		cloud3.animate({"transform":"t-500 0"}, 5000);

		cloud4.animate({"transform":"t500 0"}, 5000);
		cloud5.animate({"transform":"t500 0"}, 5000, moveCloud);
	}
}


function switchLight(){
	var bigBuildArr = s.select("#g7603");
	var blinkWindows = bigBuildArr.selectAll("path");

	var rand = 89;

	setInterval(function(){
		blinkWindows[rand].attr({fill:"#6b6f57"});
		rand = 0 + Math.random() * (183 - 0);
		rand = Math.round(rand);
		blinkWindows[rand].attr({fill:"#f4f142"});
	}, 3000);
}





firstBuildGrow();