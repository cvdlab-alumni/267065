/**
 * @author Alessio Ciccarelli
 * Exercise2.js - lake
 */

//funzione che dati un certo range di punti(coordinate x,y)  crea un lago in quella posizione

function lake (xi,xf,yi,yf) {

	var x = xf-xi;
	var y = yf-yi;
	var z = 0;
	for(i=xi;i<xf;i++){
		for(j=yi;j<yf;j++){
			z+=getZ(i,j);
		}
	}
	z= z/(x*y);
	return T([0,1,2])([xi,yi,1])(COLOR([0,255,255])(CUBOID([x,y,z-1])));
}

var lake1 = lake(10,40,10,40);
var lake2 = lake(60,90,60,90);

var model = STRUCT([terrain,lake1,lake2]);
DRAW(model);

