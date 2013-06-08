/**
 * @author Alessio Ciccarelli
 * Exercise5.js - roads
 */

// funzione che dato un certo range di punti, crea delle strade che collegano le case che si trovano in quella zona del terreno

function createroad (xi,xf,yi,yf) {
	var z = AvgZ(xi,xf,yi,yf);
	var t2=xi;
	var t1=yi;
	var t1p = t1;
	var y = yf-yi;
	var x = xf-xi;
	while(t2<xf){
	while(t1<yf){
		DRAW(COLOR([0,0,0])(T([0,1,2])([t1,t2,z+1])(CUBOID([1,y-5]))))
		t1+=5;
		}
		
		DRAW(COLOR([0,0,0])(T([0,1,2])([t1p,t2,z+1])(CUBOID([x-5,1]))))
		t2+=5;
}
	}
	

var road1 = createroad(45,70,10,40);
var road2 = createroad(70,90,40,60);
var road3 = createroad(10,40,60,90);

var model = STRUCT([terrain,lake1,lake2,forest1,forest2,forest3,settlement1,settlement2,settlement3,road1,road2,road3]);
DRAW(model);



