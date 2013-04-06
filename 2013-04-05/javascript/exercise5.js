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

CYLINDER = CYL_SURFACE;

//stairs

var depth = 0.6;
var raiser = 0.5;
var step2D = SIMPLICIAL_COMPLEX([[0,0],[0,1.1],[depth,raiser],[depth,1.1]])([[0,2,1],[1,2,3]]);
var step3D = MAP([S0,S2,S1])(EXTRUDE([2])(step2D));
var ramp = STRUCT(REPLICA(9)([step3D,T([1,3])([depth,raiser])]));


//stair1 floor1
var stair1 = T([1,2])([5.9,10.7])(ramp);

//stair2 floor2
var stair2 = T([1,2,3])([8,10.3,4.5])(ramp);

//stair3 floor3
var stair3 = T([1,2,3])([9.7,10.5,9.6])(ramp);

var building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4,southenclWithWindows,westenclWithWindows,estenclWithWindows,northenclWithWindowsT,stair1,stair2,stair3]);
VIEW(building)