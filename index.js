// imaginary 3d conjecture. matteo x pabble
// all rights reserved. copyright pabble studios & co (c) 2021

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');


var graph = {
	x: [],
	y: [],
	z: []
}

for (var i = 0; i < 20; i+=0.01){
	graph.x.push(i);
	graph.y.push(Math.cos(Math.log(i)));
	graph.z.push(Math.sin(Math.log(i)));
}

graph.x[graph.x.length] = undefined;


var cube = {
	x: [1, 1, -1, -1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1],
	y: [1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1],
	z: [1, 1, 1, 1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1, -1, -1]
}


var grid = {
	x: [0, 0, 0, 1, -1, 0, 0, 0],
	y: [1, -1, 0, 0, 0, 0, 0, 0],
	z: [0, 0, 0, 0, 0, 0, 1, -1]
}

var axis = {

}


/*

*/


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

function draw3d(points, gradient){
	for (var i = 0; i < points.x.length; i++){

		if (gradient){
			var hue = 255 - ((255 * i)/points.x.length);
			ctx.strokeStyle = "rgb(" + hue + ", " + hue + ", " + hue + ")";
		}


		line(goto3d(points.x[i], points.y[i], points.z[i], 			xrot, yrot, scale).x + canvas.width/2,
			 goto3d(points.x[i], points.y[i], points.z[i], 			xrot, yrot, scale).y + canvas.height/2,
			 goto3d(points.x[i+1], points.y[i+1], points.z[i+1],	xrot, yrot, scale).x + canvas.width/2,
			 goto3d(points.x[i+1], points.y[i+1], points.z[i+1], 	xrot, yrot, scale).y + canvas.height/2);
	}
}


var xrot = 60, yrot = 69, scale = 100, zoom = 1;
var inputKeys = {};

function tick(){
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
		xrot+= 1;
	}
	if ((inputKeys.ArrowRight == true) || (inputKeys.KeyD == true)){
		xrot-= 1;
	}
	if (((inputKeys.ArrowUp == true) || (inputKeys.KeyW == true)) && (yrot < 180)){
		yrot+= 1;
	}
	if (((inputKeys.ArrowDown == true) || (inputKeys.KeyS == true)) && (yrot > 0)){
		yrot-= 1;
	}

	if (((inputKeys.KeyZ == true) || (inputKeys.KeyW == true)) && (yrot < 180)){
		zoom+= .05;
	}
	if (((inputKeys.KeyX == true) || (inputKeys.KeyS == true)) && (yrot > 0)){
		zoom-= .05;
	}
	

	if (xrot > 360){
		xrot -= 360;
	}if (xrot < 0){
		xrot += 360;
	}

	background(51, 51, 51);
	

	/* drawing the shapes */

	// scale = 100;
	// draw3d(cube);


	//drawing the axis
	ctx.strokeStyle = "rgb(100, 100, 100)";
	scale = 1000 * zoom;
	draw3d(grid, false);


	//drawing the graph
	ctx.strokeStyle = "rgb(255, 255, 255)";
	scale = 50 * zoom;
	draw3d(graph, false);
}

function init(){
	background(51, 51, 51);

	//begin main loop
	setInterval(function(){tick();}, 33.33);
}