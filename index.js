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

function tick(){
	
	ctx.strokeStyle = "rgb(255, 255, 255)";

	for (var i = 0; i < points.x.length; i++){
		line(goto3d(points.x[i], points.y[i], points.z[i], 65, canvas.width/2, canvas.height/2).x,
			 goto3d(points.x[i], points.y[i], points.z[i], 65, canvas.width/2, canvas.height/2).y,
			 goto3d(points.x[i+1], points.y[i+1], points.z[i+1], 65, canvas.width/2, canvas.height/2).x,
			 goto3d(points.x[i+1], points.y[i+1], points.z[i+1], 65, canvas.width/2, canvas.height/2).y
			);

		// console.log(goto3d(points.x[i], points.y[i], points.z[i], 65, canvas.width/2, canvas.height/2));

	}
}

function init(){
	background(51, 51, 51);
	//begin main loop
	setInterval(function(){tick();}, 33.33);
}