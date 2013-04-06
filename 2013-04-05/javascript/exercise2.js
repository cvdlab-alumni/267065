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

//floor0
var ground = GRID([[21.3],[12.7]]);
var square = T([1,2])([2.9,4.5])(GRID([[13.2],[8.2],[0.6]]));
var cylinder = T([1,2])([4,3.7])(CYL_SURFACE([1.1,0.6])(32));
var rectangle = T([1,2])([2.9,3.7])(CUBOID([2.2,0.8,0.6]));
var semicirc = STRUCT([cylinder,rectangle]);

var cylinderg = T([1,2])([17.8,10.25])(CYL_SURFACE([2.46,0.6])(32));
var rectangleg = T([1,2])([18,7.8])(R([1,2])(PI/2)(CUBOID([4.9,2.1,0.6])));
var semicircg= STRUCT([cylinderg,rectangleg]);

var square2 = T([2])([10])(CUBOID([2.9,2.7,0.6]));
var square3 = T([1,2])([16,6.3])(CUBOID([0.6,1.5,0.6]));

var floor0 = STRUCT([ground,semicirc,square,semicircg,square2,square]);


//floor1

var floortmp1 = CUBOID([21.3,0.5,0.6]);
var floortmp2 = CUBOID([9,12.2,0.6]);
var floortmp3 = CUBOID([2.5,10.5,0.6]);
var floortmp4 = CUBOID([9.8,12.2,0.6]);
var floor1b = STRUCT([floortmp2,T([2])([12.2])(floortmp1),T([1])([9])(floortmp3),T([1])([11.5])(floortmp4)]);
var balconytmp = CUBOID([2,2,0.6]);
var plate1 = CUBOID([2,0.2,2]);
var plate2 = CUBOID([0.2,2,2]);
var plate3 = T([2])([1.8])(plate1);
var balcony = STRUCT([balconytmp,plate1,plate2,plate3]);
var floortmp = STRUCT([floor1b,T([1,2])([-2,10.3])(balcony)]);
var floor1 = T([3])([4.5])(floortmp);


//floor2

var floortmp1 = CUBOID([21.3,0.5,0.6]);
var floortmp2 = CUBOID([10.3,12.2,0.6]);
var floortmp3 = CUBOID([3.5,10.5,0.6]);
var floortmp4 = CUBOID([7.5,12.2,0.6]);
var floor2b = STRUCT([floortmp2,T([2])([12.2])(floortmp1),T([1])([10.3])(floortmp3),T([1])([13.8])(floortmp4)]);
var floor2 = T([3])([9.6])(floor2b);

//floor3

var floortmp1 = CUBOID([21.3,0.5,0.6]);
var floortmp2 = CUBOID([11.3,12.2,0.6]);
var floortmp3 = CUBOID([3.5,10.5,0.6]);
var floortmp4 = CUBOID([6.5,12.2,0.6]);
var floor3b = STRUCT([floortmp2,T([2])([12.2])(floortmp1),T([1])([11.3])(floortmp3),T([1])([14.8])(floortmp4)]);
var floor3 = T([3])([14.7])(floor3b);

//floor4
var floortmp1 = T([2])([9.7])(CUBOID([21.3,3,0.6]));
var floortmp2 = T([1])([10.4])(CUBOID([10.9,12.7,0.6]));
var floor4b = STRUCT([floortmp1,floortmp2]);
var floor4 = T([3])([19.8])(floor4b);

var building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4]);
VIEW(building);