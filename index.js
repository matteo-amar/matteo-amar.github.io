// imaginary 3d conjecture. matteo x pabble
// all rights reserved. copyright pabble studios & co (c) 2021

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var cube = {
	x: [1, 1, -1, -1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1],
	y: [1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1],
	z: [1, 1, 1, 1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1, -1, -1]
}

var grid = {
	x: [-1, 1, 1, -1, -1],
	y: [-1, -1, 1, 1, 1],
	z: [0, 0, 0, 0]
}

function background(r, g, b){
	ctx.fillStyle = ("rgb("+r+", "+g+", "+b+")"); 
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function line(x1, y1, x2, y2){
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.closePath();
	ctx.stroke();
}

function draw3d(points){
	for (var i = 0; i < points.x.length; i++){
		ctx.strokeStyle = "rgb(255, 255, 255)";
		line(goto3d(points.x[i], points.y[i], points.z[i], 			xrot, yrot, scale).x + canvas.width/2,
			 goto3d(points.x[i], points.y[i], points.z[i], 			xrot, yrot, scale).y + canvas.height/2,
			 goto3d(points.x[i+1], points.y[i+1], points.z[i+1],	xrot, yrot, scale).x + canvas.width/2,
			 goto3d(points.x[i+1], points.y[i+1], points.z[i+1], 	xrot, yrot, scale).y + canvas.height/2);
	}
}


var xrot = 60, yrot = 69, scale = 100;
var inputKeys = {};

function tick(){

	background(51, 51, 51);

	//user input process
	document.addEventListener('keydown', keyDown);
	function keyDown(e) {
	  inputKeys[e.code] = true;
	}
	document.addEventListener('keyup', keyUp);
	function keyUp(e) {
	  inputKeys[e.code] = false;
	}


	if ((inputKeys.ArrowLeft == true) || (inputKeys.KeyA == true)){
		xrot+= 2;
	}
	if ((inputKeys.ArrowRight == true) || (inputKeys.KeyD == true)){
		xrot-= 2;
	}
	if (((inputKeys.ArrowUp == true) || (inputKeys.KeyW == true)) && (yrot < 180)){
		yrot+= 2;
	}
	if (((inputKeys.ArrowDown == true) || (inputKeys.KeyS == true)) && (yrot > 0)){
		yrot-= 2;
	}

	if (xrot > 360){
		xrot -= 360;
	}if (xrot < 0){
		xrot += 360;
	}
	
	scale = 100;
	draw3d(cube);
	scale = 400;
	// draw3d(grid);
}

function init(){
	background(51, 51, 51);

	//begin main loop
	setInterval(function(){tick();}, 33.33);
}