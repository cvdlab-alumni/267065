/**
 * @author Alessio Ciccarelli
 * Exercise3.js - forest 
 */


//funzione per creare alberi dato un certo raggio e l'altezza

function tree (r,h){
	
	var domaint = DOMAIN([[0,1],[0,2*PI]])([32,32]);
	var model = COLOR([0.8,0.51,0.5])(CYL_SURFACE([r/4,h/3])([16,2]));
	var c1 = BEZIER(S0)([[r,0,h/3],[r/2,0,(2/3)*h],[0,0,h]]);
	var mapping = ROTATIONAL_SURFACE(c1);
	var surface = COLOR([0, 255, 0])(MAP(mapping)(domaint));
	var c1b = BEZIER(S0)([[r/4,0,0],[r/8,0,0],[0,0,0]]);
	var mappingc1 = ROTATIONAL_SURFACE(c1b);
	var c1b = MAP(mappingc1)(domaint);
	var c2 = BEZIER(S0)([[r,0,0],[r/2,0,0],[0,0,0]]);
	var mappingc2 = ROTATIONAL_SURFACE(c2);
	var c2t =COLOR([0, 255, 0])(T([2])([h/3])(MAP(mappingc2)(domaint)));
	return STRUCT([model,surface,c1b,c2t]);
	}
	
//funzione che dato un certo intervallo di valore dove posizionare la foresta, crea una foresta random con alberi di raggio e altezza casuali in quella parte di terreno

function createforest (xi,xf,yi,yf) {
	var z = AvgZ(xi,xf,yi,yf);
	var t2=xi;
	while(t2<xf){
		var t1=yi;
	while(t1<yf){
		var r = getRandomInt(1,2);
		var h = getRandomInt(3,5);
		DRAW(T([0,1,2])([t1,t2,z])(tree(r,h)))
		t1+=3;
		}
		t2+=3;
}
}

var forest1 = createforest(75,95,15,35);
var forest2 = createforest(15,65,45,55);
var forest3 = createforest(45,55,55,85);

var model = STRUCT([terrain,lake1,lake2,forest1,forest2,forest3]);
DRAW(model);