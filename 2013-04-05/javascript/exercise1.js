// adapt pyplasm code to plasm.js code

T = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
     return object.clone().translate(dims, values);
    };
  };
};
  
R = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });
   
  return function (angle) {
    return function (object) {
      return object.clone().rotate(dims, angle);
    };
  };
};
  
S = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
      return object.clone().scale(dims, values);
    };
  };
};

S3 = S2;
S2 = S1;
S1 = S0;

GRID = SIMPLEX_GRID;

NN = REPLICA;

VIEW = DRAW;



//pillars0 creo i pilastri del piano terra, la prima fila è cilindrica mentre la seconda quadratica
var cylinder = CYL_SURFACE([0.25,4.5])(32) ;
var cylinders = T([1,2])([0.25,0.25])(STRUCT(NN(5)([cylinder,T([1])([5.2])])));
var secondLine = GRID([[0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5],[-10,0.5],[4.5]]);
var pillars0 = STRUCT([cylinders,secondLine]);

//pillars1 creo i pilastri del floor1
var pillars1 = GRID([[0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5],[0.5,-9.5,0.5],[-5.1,4.5]]);

//pillars2 creo i pilastri del floor2, le due file di pilastri sono in numero diversi quindi creo due differenti grid e poi faccio la struct
var firstLine2 = GRID([[0.5,-4.7,0.5,-15.1,0.5],[0.5],[-10.2,4.5]]);
var secondLine2 = GRID([[0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5],[-10,0.5],[-10.2,4.5]]);
var pillars2 = STRUCT([firstLine2,secondLine2]);

//pillars3 creo i pilastri del floor3, creo tre diverse griglie perchè le file hanno un numero diverse di pilastri ed inoltre alcuni pilastri della seconda fila sono di dimensione diversa
var firstLine3 = GRID([[-10.4,0.5,-9.9,0.5],[0.5],[-15.3,4.5]]);
var secondLineLittle3 = GRID([[0.25,-4.95,0.25],[-10,0.25],[-15.3,4.5]]);
var secondLine3 = GRID([[-10.4,0.5,-4.7,0.5,-4.7,0.5],[-10,0.5],[-15.3,4.5]]);
var pillars3 = STRUCT([firstLine3,secondLineLittle3,secondLine3]);

var building = STRUCT([pillars0,pillars1,pillars2,pillars3]);
DRAW(building);