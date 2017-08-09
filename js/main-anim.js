var elArr = $("#svg path");

var delay = 100;

$("#svg").attr("anim-deley") == 2 ? delay = 50 : delay = 100;

console.log(delay);

for(var i = 0; i < elArr.length; i++){

	$(elArr[i]).delay(i*delay).show(100).delay(i*delay);

}