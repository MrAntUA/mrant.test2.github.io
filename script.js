// Main function
function snakeGame(){
	// This variables can be customize
	var turnSize = 40;
	var snakeSpeed = 300;
		// Snake start position
	var snakeX = 0;
	var snakeY = 0;
	// Don't touch this variables
	var snakeLength = 3;
	var randX;
	var randY;
	var minX = 0;
	var maxX = 780;
	var minY = 0;
	var maxY = 580;
	var turnSide;
		// Turns array
	var lastTurnX = [];
	var lastTurnY = [];
		// Timer
	var timerId;
	// Take canvas and init graphic context
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	// Start the functions of base rendering and control
	initCanvas();
	initSnake();
	initFood();
	onPush();
	// Function description
		// Render rectangle for background (100% canvas width and height)
	function initCanvas(){
		ctx.fillStyle = "#668";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	}
		// Render rectangle for snake body (the base 1 cell)
	function initSnake(){
		ctx.fillStyle = "#3CA0D0";
		ctx.fillRect(snakeX, snakeY, turnSize, turnSize);
			// If snake eat the food, then we render new food in random position
		if(snakeX === randX && snakeY === randY){
			initFood();
			snakeLength ++;
		}
	}
	// Render ractangle for food
	function initFood(){
		randX = Math.floor(Math.floor(Math.random()*(maxX-minX+1)+minX) / turnSize) * turnSize;
    	randY = Math.floor(Math.floor(Math.random()*(maxY-minY+1)+minY) / turnSize) * turnSize;
		ctx.fillStyle = "#fff";
		ctx.fillRect(randX, randY, turnSize, turnSize);
	}
	// Function which watching at the controlers
	function onPush(){
		document.addEventListener("keydown", function(e){
			if(e.keyCode === 37 && turnSide !== 3){
				// Clear moving function
				clearTimeout(timerId);
				// Turn indicator
				turnSide = 1;
				// Run functin which moves the snake to the left
				timeInterval(-turnSize, 0);
			}
			if(e.keyCode === 38 && turnSide !== 4){
				clearTimeout(timerId);
				// Turn indicator
				turnSide = 2;
				// Run functin which moves the snake to the top
				timeInterval(0, -turnSize);
			}
			if(e.keyCode === 39 && turnSide !== 1){
				clearTimeout(timerId);
				// Turn indicator
				turnSide = 3;
				// Run functin which moves the snake to the right
				timeInterval(turnSize, 0);
			} 
			if(e.keyCode === 40 && turnSide !== 2){
				clearTimeout(timerId);
				// Turn indicator
				turnSide = 4;
				// Run functin which moves the snake to the bottom
				timeInterval(0, turnSize);
			}
		})
	}
	function moveTo(movePointX, movePointY){
		// Push snake position in array
		lastTurnX.push(snakeX);
		lastTurnY.push(snakeY);
		clearTail();
		// Render snake in new position
		snakeX += movePointX;
		snakeY += movePointY;
		initSnake();
	}
	function clearTail(){
		ctx.fillStyle = "#668";
		snakeBody = ctx.fillRect(lastTurnX[lastTurnX.length - snakeLength], lastTurnY[lastTurnY.length - snakeLength], turnSize, turnSize);
	}
	// Timer function
	function timeInterval(pointX, pointY){
		timerId = setTimeout(function tick() {
  			moveTo(pointX, pointY);
  			timerId = setTimeout(tick, snakeSpeed);
		}, snakeSpeed);
	}
}
snakeGame();