// pabble's 2017 scratch 3d engine, 2020 remaster
// all rights reserved. copyright pabble studios (c) 2017-2020

function goto3d(x, y, z, xrot, yrot, scale) {
	var tX, tY, tZ, tS;
	var X3D, Y3D, Z3D;
	var X2D, Y2D;

	tX = x;
	tY = y;
	tZ = z;

	X3D = ((cos(xrot)*tX) - (sin(xrot)*tY));
	Y3D = ((cos(yrot) * ((sin(xrot) * tX) + (cos(xrot)*tY))) - (sin(yrot)*tZ));
	Z3D = ((sin(yrot) * ((sin(xrot) * tX) + (cos(xrot)*tY))) + (cos(yrot)*tZ));
	tS = (Z3D + 10) * (scale*0.1);
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