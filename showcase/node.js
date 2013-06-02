!(function (exports){

  var fs = require('fs');

  var plasm_lib = require('plasm.js');
  var obj = plasm_lib.plasm;
  var fun = plasm_lib.plasm_fun;
  var plasm = obj.plasm;
  var Plasm = obj.Plasm;

  var root = this;

  Object.keys(fun).forEach(function (k) { 
    root[k] = fun[k];
  });

  var p = new Plasm();
  fun.PLASM(p);


  var scmodel = (function () {
/**
 * Alessio Ciccarelli
 * Model - XBOX360 
 */

// funzione parametrica per creare curve BEZIER

function curve (points,dim,domain) {
	
var curveMapping = BEZIER(dim)(points);
var curve = MAP(curveMapping)(domain);

return curve;

} 

// funzione parametrica per creare superfici

function surface (arrayPoints,dim1,dim2,domain) {
	
	var arraytmp = new Array();
	
	for(controlPoints in arrayPoints){
		var b = BEZIER(dim1)(arrayPoints[controlPoints]);
		arraytmp.push(b);
		}
	
	var sur = MAP(BEZIER(dim2)(arraytmp))(domain);

	return sur;
}

// definisco i domini

var domain = INTERVALS(1)(32);
var domain1 = DOMAIN([[0,1],[0,1]])([32,32]);
var domain2 = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(30)]);
var domain3 = DOMAIN([[0,1],[0,2*PI]])([32,32]);

// superfici laterali

var controlpoints = [[2,0,0],[1,0,0],[0.5,0,0.01],[0,0,0.05],[0,0,2],[0,0,4],[1,0,5],[0,0,6],[0,0,8],[0,0,9.95],[0.5,0,9.99],[1,0,10],[2,0,10],[3,0,10],[3.5,0,9.99],[4,0,9.95],[4,0,8],[4,0,6],[3,0,5],[4,0,4],[4,0,2],[4,0,0.05],[3.5,0,0.01],[3,0,0],[2,0,0]];
var controlpoints2 = [[2,10,0],[1,10,0],[0.5,10,0.01],[0,10,0.05],[0,10,2],[0,10,4],[1,10,5],[0,10,6],[0,10,8],[0,10,9.95],[0.5,10,9.99],[1,10,10],[2,10,10],[3,10,10],[3.5,10,9.99],[4,10,9.95],[4,10,8],[4,10,6],[3,10,5],[4,10,4],[4,10,2],[4,10,0.05],[3.5,10,0.01],[3,10,0],[2,10,0]];
var lateralSurfaceWhite = COLOR([255,255,255])(surface([controlpoints,controlpoints2],S0,S1,domain1));

// superfici orizzontali
var controlpoints3 = [[1.2,0,0.05],[2,-0.1,0.05],[4.5,0,0.05],[2,0.1,0.05],[1.2,0,0.05]];
var controlpoints4 = [[0.3,0,0.3],[2,-0.1,0.3],[7.5,0,0.3],[2,0.1,0.3],[0.3,0,0.3]];
var controlpoints5 =[[0,0,2],[2,-0.1,2],[7.5,0,2],[2,0.1,2],[0,0,2]];
var controlpoints6 =[[0,0,8],[2,-0.1,8],[7.5,0,8],[2,0.1,8],[0,0,8]];
var controlpoints7 = [[0.4,0,9],[2,-0.1,9],[7.5,0,9],[2,0.1,9],[0.4,0,9]];
var controlpoints8 = [[1.7,0,9.5],[2,-0.1,9.5],[2.5,0,9.5],[2,0.1,9.5],[1.7,0,9.5]];

var arrayPoints1 = [controlpoints3,controlpoints4,controlpoints5,controlpoints6,controlpoints7,controlpoints8];
var horizontalSurface1 = surface(arrayPoints1,S0,S1,domain2);
var horizontalSurface2 = T([1])([10])(horizontalSurface1);

// lettore cd

var controlpoints9 = [[1,5.5,0],[1.3,5.5,-0.1],[1.6,5.5,0],[1.3,5.5,0.1],[1,5.5,0]];
var controlpoints10 = [[1,7.5,0],[1.5,7.5,-0.1],[2,7.5,0],[1.5,7.5,0.1],[1,7.5,0]];
var controlpoints11 = [[1,9.5,0],[1.3,9.5,-0.1],[1.6,9.5,0],[1.3,9.5,0.1],[1,9.5,0]];

var arrayPoints2 = [controlpoints9,controlpoints10,controlpoints11];
var cdrom = surface(arrayPoints2,S0,S1,domain2);

//tasti e altre rifiniture

var controlpoints12 = [[1,1,0],[1.2,1.3,0],[2,1.5,0],[2.8,1.3,0],[3,1,0],[2.8,0.7,0],[2,0.5,0],[1.2,0.7,0],[1,1,0]];
var curve1 = curve(controlpoints12,S0,domain);
var curve1T = T([1])([0.5])(curve1);

var buttonTmp = BEZIER(S0)([[0,0],[0.3,0],[0.1,0],[0,0]]);
var mappingButton = ROTATIONAL_SURFACE(buttonTmp);
var button = MAP(mappingButton)(domain3);
var buttonT = T([0,1])([1.85,3.5])(button);
var greenButtonT = COLOR([0, 255, 0])(buttonT);

var greenOutline = COLOR([0, 255, 0])(CIRCLE(0.6)(32));
var buttonGreenOutline = T([0,1])([1.85,3.5])(greenOutline);

var controlpoints13 = [[0,0],[0.4,1],[0,2],[-0.4,1],[0,0]];
var slot = curve(controlpoints13,S0,domain);
slot1 = T([0,1])([2.5,6])(slot);
slot2 = T([1])([1.5])(slot1);

button2 = CIRCLE(0.2)(32);
button2T = T([0,1])([2.5,5.5])(button2);

var controlpoints14 = [[0,0,0]];
var controlpoints15 = [[0.3,0.3,0],[0,0.3,-0.1],[-0.8,0.3,0],[0,0.5,0.1],[0.3,0.3,0]];
var controlpoints16 = [[0,0.6,0]];
var arrayPoints3 = [controlpoints14,controlpoints15,controlpoints16];
var surfaceBlack = surface(arrayPoints3,S0,S1,domain2);
var surfaceBlackC = COLOR([0,0,0])(surfaceBlack);
var surfaceBlackCT = T([0,1])([2.5,9])(surfaceBlackC);


var model = STRUCT([lateralSurfaceWhite,horizontalSurface1,horizontalSurface2,cdrom,curve1T,greenButtonT,buttonGreenOutline,slot1,slot2,button2T,surfaceBlackCT]);

  return model
  })();

  exports.author = 'alec86';
  exports.category = 'games';
  exports.scmodel = scmodel;

  if (!module.parent) {
    fs.writeFile('./data.json', JSON.stringify(scmodel.toJSON()));
  }

}(this));