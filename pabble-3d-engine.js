// pabble's 2017 scratch 3d engine, 2020 remaster
// all rights reserved. copyright pabble studios (c) 2017-2020

var points = {
	x: [1, 1, -1, -1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1],
	y: [1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 1],
	z: [1, 1, 1, 1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1, -1, -1]
}

var rot = {
	x: 0,
	y: 0,
	z: 0
}

var pos = {
	x: 0,
	y: 0,
	z: 0
}

function goto3d(x, y, z, xrot, yrot, scale, xoffset, yoffset) {
	var tX, tY, tZ, tS;
	var X3D, Y3D, Z3D;
	var X2D, Y2D;

	tX = x;
	tY = y;
	tZ = z;

	X3D = ((cos(yrot)*tX) - (sin(yrot)*tY));
	Y3D = ((cos(xrot) * ((sin(yrot) * tX) + (cos(yrot)*tY))) - (sin(xrot)*tZ));
	Z3D = ((sin(xrot) * ((sin(yrot) * tX) + (cos(yrot)*tY))) + (cos(xrot)*tZ));
	tS = (Z3D + 10) * (scale/10);
	X2D = (X3D * tS);
	Y2D = (Y3D * tS);

	return {
		x: X2D,
		y: Y2D
	};

	function sin(a) {
    	return Math.sin(a*Math.PI/180);
	};
	function cos(a) {
    	return Math.cos(a*Math.PI/180);
	};

}

// console.log(goto3d(1, 1, -1, 65, 250, 250));