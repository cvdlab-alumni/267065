/**
 * @author Alessio Ciccarelli
 * Exercise1.js - mountainous terrain
 */

//definisco un array dove mi andro a salvare tutti i punti(x,y,z) dopo la creazione del terreno montuoso

var pointsSaved = new Array();

//definisco i domini che mi serviranno
var domain = INTERVALS(1)(32);
var domain1 = DOMAIN([[0,1],[0,1]])([32,32]);
var domain2 = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(30)]);

// funzione che mi restiuisce un numero random di un certo range di valori
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione che mi resituisce il valore z di un punto passandogli la xe la y
function getZ (x,y){
	
	for(obj in pointsSaved){
		var point = pointsSaved[obj];
		if(point[0]===x){
			if(point[1]===y){
				return point[2];
			}
		}
	}
	
}

//funzione che data una x inziale,x finale,una y iniziale e una y finale mi restituisce la media del valore z di questo gruppo di punti
function AvgZ (xi,xf,yi,yf){
	
	var x = xf-xi;
	var y = yf-yi;
	var z = 0;
	for(i=xi;i<xf;i++){
		for(j=yi;j<yf;j++){
			z+=getZ(i,j);
		}
	}
	return z/(x*y);
	
}

//funzione parametrica per creare superfici con le curve di BEZIER

function surface (arrayPoints,dim1,dim2,domain) {
	
	var arraytmp = new Array();
	
	for(controlPoints in arrayPoints){
		var b = BEZIER(dim1)(arrayPoints[controlPoints]);
		arraytmp.push(b);
		}
	
	var sur = MAP(BEZIER(dim2)(arraytmp))(domain);

	return sur;
}

//funzione che dato un certo valore della x,della y e l'altezza massima mi crea random un terreno montuoso

function mountainousTerrain (x,y,maxz){
	
	var arrayPoints = new Array();
	var first = [[0,0,0],[0,y,0]];
	arrayPoints.push(first);
	pointsSaved.push([0,0,0]);
	pointsSaved.push([0,y,0]);
	for(i=1;i<=x;i++){
		var controlpoints = new Array();
		controlpoints.push([x,0,0]);	
		pointsSaved.push([x,0,0]);	
		for(j=1;j<=y;j++){
			var z = Math.round(maxz*Math.random());
			var point = [i,j,z];
			pointsSaved.push(point);
			controlpoints.push(point);
		}
		controlpoints.push([x,y,0]);
		pointsSaved.push([x,y,0]);
		arrayPoints.push(controlpoints);
	}
	var last = [[x,0,0],[x,y,0]];
	pointsSaved.push([x,0,0]);
	pointsSaved.push([x,y,0]);
	arrayPoints.push(last);
	var base = CUBOID([x,y]);
	return STRUCT([base,surface(arrayPoints,S0,S1,domain1)]);
}

var terrain = COLOR([0.8,0.51,0.4])(mountainousTerrain(100,100,45));
var model = STRUCT([terrain]);
DRAW(model);
