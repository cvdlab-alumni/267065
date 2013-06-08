/**
 * @author Alessio Ciccarelli
 * Exercise4.js - settlement
 */


//funzione per creare una casa standard con una porta e 2 finestre data l'altezza e la larghezza

function home (x,h) {
	
	s1 = SIMPLEX_GRID([[x/4,-x/2,x/4],[0.2],[h/3]]);
	s2 = SIMPLEX_GRID([[x],[0.2],[-h/3,0.1]]);
	s3 = SIMPLEX_GRID([[x/9,-x/3,x/9,-x/3,x/9],[0.2],[-(h/3)-0.1,h/3]]);
	s4 = SIMPLEX_GRID([[x],[0.2],[-(h*2/3)-0.1,(h/3)-0.1]]);
	sup2 = T([1])([x])(CUBOID([x,0.2,h]));
	sup3 = (CUBOID([0.2,x,h]));
	sup4 = T([0])([x-0.2])(sup3);
	sup5 = T([2])([h-0.2])(CUBOID([x,x,0.2]));
	sup6 = CUBOID([x,x,0]);
	var home  = COLOR([255,255,255])(STRUCT([s1,s2,s3,s4,sup2,sup3,sup4,sup5,sup6]));
	var door = COLOR([0,0,0])(T([0])([x/4])(CUBOID([x/2,0.2,h/3])));
	var windows = COLOR([0,0,0,0.5])(T([0,2])([x/9,(h/3)+0.1])(CUBOID([x/3,0.1,h/3])));
	var windows2 = T([0])([(4/9)*x])(windows);
	return STRUCT([home,door,windows,windows2]);
} 

// funzione che dato un certo range di punti, crea in quella zona del terreno un insediamento di case random di altezza e larghezza casuali

function createsettlement (xi,xf,yi,yf) {
	var z = AvgZ(xi,xf,yi,yf);
	var t2=xi;
	while(t2<xf){
		var t1=yi;
	while(t1<yf){
		var x = getRandomInt(1,3);
		var y = getRandomInt(2,4);
		DRAW(T([0,1,2])([t1,t2,z+1])(home(x,y)))
		t1+=5;
		}
		t2+=5;
}
}

var settlement1 = createsettlement(45,70,10,40);
var settlement2 = createsettlement(70,90,40,60);
var settlement3 = createsettlement(10,40,60,90);

var model = STRUCT([terrain,lake1,lake2,forest1,forest2,forest3,settlement1,settlement2,settlement3]);
DRAW(model);
