var context = new AudioContext();
var request = new XMLHttpRequest();
request.open('GET', 'https://mrantua.github.io/mrant.test2.github.io/sounds/track3.mp3', true);
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

        var bars_arr = [];


        ctx.fillStyle = '#00CCFF';
		for (var i = 0; i < width; i++) {
			bar_x = i*1;
			bar_width = 1;
			bar_height = (data[step*i] * amp) + 1;
			bar_height > 0 ? bar_height*=-1 : bar_height;
			ctx.fillRect(bar_x, canvas.height/2, bar_width, bar_height);
			var bar = {
				index: i,
				height: bar_height
			}
			bars_arr.push(bar);
		}

		renderCursor();

		var source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        source.start();

        var cursor = document.getElementById("cursor");

        var allTime =  buffer.duration;

        function renderCursor(){
        	setInterval(function(){

        		var absoluteTime = context.currentTime;
        		var relativeTime = (absoluteTime * 100) / allTime;
        		var absolutePosition = (relativeTime * width) / 100;
        		cursor.style.left = absolutePosition + "px";
        		var absoluteDone = (relativeTime * width) / 100;
        		var absoluteDone = Math.ceil(absoluteDone);
        		console.log(absoluteDone);
        		ctx.fillStyle = '#000';
        		for (var i = 0; i<absoluteDone; i++){
        			bar_x = i*1;
					bar_width = 1;      			
        			ctx.fillRect(bar_x, canvas.height/2, bar_width, bars_arr[i].height);
        		}
        	}, 1000);
        }
        console.log(bars_arr);
    });
};
request.send();