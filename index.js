// imaginary 3d conjecture. matteo x pabble
// all rights reserved. copyright pabble studios & co (c) 2021

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

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


var xrot = 72, yrot = 144, scale = 144;
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


	if (inputKeys.ArrowLeft == true){
		xrot+= 2;
	}
	if (inputKeys.ArrowRight == true){
		xrot-= 2;
	}
	if ((inputKeys.ArrowUp == true) && (yrot < 180)){
		yrot+= 2;
	}
	if ((inputKeys.ArrowDown == true) && (yrot > 0)){
		yrot-= 2;
	}

	//drawing the points
	for (var i = 0; i < points.x.length; i++){
		ctx.strokeStyle = "rgb(255, 255, 255)";
		line(goto3d(points.x[i], points.y[i], points.z[i], 			xrot, yrot, scale).x + canvas.width/2,
			 goto3d(points.x[i], points.y[i], points.z[i], 			xrot, yrot, scale).y + canvas.height/2,
			 goto3d(points.x[i+1], points.y[i+1], points.z[i+1],	xrot, yrot, scale).x + canvas.width/2,
			 goto3d(points.x[i+1], points.y[i+1], points.z[i+1], 	xrot, yrot, scale).y + canvas.height/2);
	}
}

function init(){
	background(51, 51, 51);

	//begin main loop
	setInterval(function(){tick();}, 33.33);
}