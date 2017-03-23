// Create and config audio
var audioEl = new Audio();
audioEl.src = "sounds/track1.mp3";
audioEl.controls = false;
audioEl.loop = true;
audioEl.autoplay = true;
//Common variables
var canvas, context, audioContext, analyser, source, bars, fbc_array, bar_x, bar_width, bar_height;
//Main function
(function main(){
	// Append audio in DOM
	document.getElementById("audio-container").appendChild(audioEl);
	// Init canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	// Init AudioAPI
	audioContext = new (window.AudioContext || window.webkitAudioContext)();
	analyser = audioContext.createAnalyser();
	// Create AudioAPI connection
	source = audioContext.createMediaElementSource(audioEl);
	source.connect(analyser);
	analyser.connect(audioContext.destination);
	render();
})();

function render(){
	// Get data
	window.requestAnimationFrame(render);
	fbc_array = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(fbc_array);
	// Render canvas
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = '#00CCFF';
	bars = 1000;
	for (var i = 0; i < bars; i++) {
		bar_x = i * 1.2;
		bar_width = 0.5;
		bar_height = -(fbc_array[i] / 2);
		i % 2 === 0 ? context.fillStyle = '#00CCFF' : context.fillStyle = '#000';
		context.fillRect(bar_x, canvas.height, bar_width, bar_height);
	}
}