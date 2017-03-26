var context = new AudioContext();
var request = new XMLHttpRequest();
request.open('GET', 'https://mrantua.github.io/mrant.test2.github.io/sounds/track5.mp3', true);
request.responseType = "arraybuffer";
request.onload = function () {
    context.decodeAudioData(request.response, function (buffer) {
        var data = buffer.getChannelData(0),
        canvas = document.getElementById('vis'),
        width = canvas.width,
        height = canvas.height,
        ctx = canvas.getContext('2d'),
        step = Math.ceil(data.length / width),
        amp = 100;

        //ctx.fillStyle = '#000';   
        //ctx.fillRect(bar_x, canvas.height/2, bar_width, bar_height);

        ctx.fillStyle = '#00CCFF';
		for (var i = 0; i < width; i++) {
			bar_x = i*2;
			bar_width = 2;
			bar_height = data[step*i] * amp;
			//bar_height > 0 ? bar_height*=-1 : bar_height;
			ctx.fillRect(bar_x, canvas.height/2, bar_width, bar_height);
		}

		renderCursor();

		var source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        source.start();
        var speed = width / buffer.duration;

        var cursor = document.getElementById("cursor");
        cursor.style.left = "4px"

        function renderCursor(){
        	setInterval(function(){
        		var style = getComputedStyle(cursor);
        		var left = parseInt(style.left);
        		left += speed;
        		cursor.style.left = left + "px";

        	}, 1000);
        }
    });
};
request.send();