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

//color windows south vertical enclosures

var allwindowssouthblack = COLOR(0,0,0)(allwindowssouth);
var southenclWithWindows = STRUCT([southencl,allwindowssouthblack]);

//color windows west vertical enclosures

var windowswestblack = COLOR(0,0,0)(windowswest);
var westenclWithWindows = T([2])([11.7])(STRUCT([westencl,windowswestblack]));

//color windows est vertical enclosures
var windowsestblack = COLOR(0,0,0)(windowsest);
var estenclWithWindows = STRUCT([estencl,windowsestblack]);

//color windows north vertical enclosures

var windows1tmpblack = COLOR(0,0,0)(windows1tmp);
var windows2tmpblack = COLOR(0,0,0)(windows2tmp);
var levelWithWindows = STRUCT([level,windows1tmpblack,windows2tmpblack]);
var levelWithWindows2 = T([3])([5.1])(levelWithWindows);
var levelWithWindows3 = T([3])([10.2])(levelWithWindows);
var northenclWithWindows = STRUCT([rect1,levelWithWindows,levelWithWindows2,levelWithWindows3]);

var northenclWithWindowsT = T([1])([21.3])(northenclWithWindows);


var building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4,southenclWithWindows,westenclWithWindows,estenclWithWindows,northenclWithWindowsT]);
VIEW(building)