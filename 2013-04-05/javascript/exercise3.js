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

//south vertical enclosures

var rect1 = GRID([[1],[12.7],[-4.5,0.6,-4.5,0.6,-4.5,2.1,-3,2]]);
var rect2 = GRID([[1],[0.5,-9.4,0.5,-1.6,0.7],[-5.1,4.5]]);
var windowstmp1 = GRID([[0.2],[-0.5,2.2],[-5.1,0.2]]);
var windowstmp2 = GRID([[0.2],[-0.5,2.2],[-7.25,0.2]]);
var windowstmp3 = GRID([[0.2],[-0.5,2.2],[-9.4,0.2]]);
var windowstmp4 = GRID([[0.2],[-2.7,0.2],[-5.1,4.5]]);
var windows =STRUCT([windowstmp1,windowstmp2,windowstmp3,windowstmp4]);


var allwindowstmp  = STRUCT([windows,T([2])([2.4])(windows),T([2])([4.8])(windows),T([2])([7])(windows)]);
var allwindowssouth  = STRUCT([allwindowstmp,T([3])([5.1])(allwindowstmp)]);
var rect3 = GRID([[1],[0.5,-9.4,2.8],[-10.2,4.5]]);
var rect4 = GRID([[1],[0.5,-9.4,0.25,-2.3,0.25],[-15.3,4.5]]);


var southencl = STRUCT([rect1,rect2,rect3,rect4]);
var southenclWithWindows = STRUCT([southencl,allwindowssouth]);

// west verical enclosures

var rect1 = GRID([[21.3],[1],[-4.5,2.85,-2.25,2.85,-2.25,7.1]]);
var rect2 = GRID([[14.3,-1,3,-3],[1],[4.5]]);
var rect3 = GRID([[-14.3,1,-6],[1],[3]]);
var rect4 = GRID([[-14.3,1,-6],[1],[-4,0.5]]);
var rect5 = GRID([[11.6,-4.7,5],[1],[-7.35,2.25]]);
var rect6 = GRID([[17.3,-0.25,1,-0.25,2.5],[1],[-12.45,2.25]]);
var windowswest = GRID([[-11.6,-2.25,0.2,-5],[1],[-7.35,2.25]]);
var westencl = STRUCT([rect1,rect2,rect3,rect4,rect5,rect6]);
var westenclWithWindows = T([2])([11.7])(STRUCT([westencl,windowswest]));

// est verical enclosures

var rect1 = GRID([[10.4],[1],[-4.5,12.3,-3,2]]);
var rect2 = GRID([[-10.4,0.5,-4.7,5.7],[1],[-4.5,17.3]]);
var rect3 = GRID([[-10.9,4.7],[1],[-4.5,2.85,-2.25,2.85,-2.25,2.85,-2.25,2]]);
var windowsest = GRID([[-10.9,-2.25,0.2],[1],[-4.5,-2.85,2.25,-2.85,2.25,-2.85,2.25,-2]]);
var estencl = STRUCT([rect1,rect2,rect3]);
var estenclWithWindows = STRUCT([estencl,windowsest]);

// north vertical enclosures

var rect1 = GRID([[1],[12.7],[-4.5,0.6,-4.5,0.6,-4.5,0.6,-4.5,2]]);
var rect2 = GRID([[1],[0.5],[-5.1,4.5]]);
var rect3 = GRID([[1],[-0.5,8],[-5.1,2]]);
var rect4 = GRID([[1],[-0.5,8],[-9.1,0.5]]);
var rect5 = GRID([[1],[-8.5,2.7],[-5.1,4.5]]);
var rect6 = GRID([[1],[-11.2,1],[-5.1,0.3]]);
var rect7 = GRID([[1],[-11.2,1],[-9.3,0.3]]);
var rect8 = GRID([[1],[-12.2,0.5],[-5.1,4.5]]);
var windowsnorthtmp = GRID([[1],[-2.35,0.2],[-7.1,2]]);
var windows1tmp = STRUCT([windowsnorthtmp,T([2])([2.05])(windowsnorthtmp),T([2])([4.1])(windowsnorthtmp)]);
var windows2tmp = GRID([[1],[-11.2,1],[-7.35,0.2]]);
var level = STRUCT([rect2,rect3,rect4,rect5,rect6,rect7,rect8]);
var levelWithWindows = STRUCT([level,windows1tmp,windows2tmp]);
var levelWithWindows2 = T([3])([5.1])(levelWithWindows);
var levelWithWindows3 = T([3])([10.2])(levelWithWindows);
var northenclWithWindows = STRUCT([rect1,levelWithWindows,levelWithWindows2,levelWithWindows3]);
var northenclWithWindowsT = T([1])([21.3])(northenclWithWindows);

var building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4,southenclWithWindows,westenclWithWindows,estenclWithWindows,northenclWithWindowsT]);
VIEW(building)