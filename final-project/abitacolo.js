/**
 * @author Alessio Ciccarelli
 */

// function to create a tube

function tube(r, h) {
	var domaint = DOMAIN([[0,1],[0,2*PI]])([16, 16]);
	var tube = CYL_SURFACE([r,h])(16);
	var basetmp = BEZIER(S0)([[r, 0, 0], [r, 0, 0], [0, 0, 0]]);
	var mappingbase = ROTATIONAL_SURFACE(basetmp);
	var base = MAP(mappingbase)(domaint)
	var baset = T([2])([h])(base);
	return STRUCT([tube, base, baset]);
}

// function to create a tube

function tubeLittle(r, h) {
	var domaint = DOMAIN([[0,1],[0,2*PI]])([8, 8]);
	var tube = CYL_SURFACE([r,h])(8);
	var basetmp = BEZIER(S0)([[r, 0, 0], [r, 0, 0], [0, 0, 0]]);
	var mappingbase = ROTATIONAL_SURFACE(basetmp);
	var base = MAP(mappingbase)(domaint)
	var baset = T([2])([h])(base);
	return STRUCT([tube, base, baset]);
}

// function to create a triangle

function triangle(w, h) {
	var t1 = tube(w, h);
	var t1R = ROTATE([2,0])(PI*(1/5))(t1);
	var t2 = ROTATE([2,0])(PI*(-6/5))(t1);
	var t2R = T([0,2])([0.75,1])(t2);
	return STRUCT([t1R, t2R]);
}

// function to create a rod

function rod() {
	var rubber = COLOR([0,0,0])(tube(0.12, 0.1));
	var rod = T([2])([0.1])(tube(0.1, 10.2))
	return STRUCT([rod, rubber]);
}

// function to create a basket

function basket() {
	var base = CUBOID([1, 1, 0.1]);
	var rodsbase = T([0,1])([0.02,0.02])(STRUCT(REPLICA(7)([tubeLittle(0.02, 0.9), T([0])([0.16])])));
	var rodsVtmp = ROTATE([2,0])(PI/2)(tubeLittle(0.02, 1));
	var rodsbase2 = T([1,2])([0.02,0.24])(STRUCT(REPLICA(5)([rodsVtmp, T([2])([0.16])])));
	var rods1 = STRUCT([rodsbase, rodsbase2]);
	var rods2 = T([1])([0.96])(rods1);
	var rods3 = T([0])([0.04])(ROTATE([0,1])(PI/2)(rods1));
	var rods4 = T([0])([0.96])(rods3);
	return STRUCT([base, rodsbase, rods1, rods2, rods3, rods4]);
}

// creating the X STRUCTURE

var rod = rod();
var rod2 = T([0])([1])(rod);
var rod3 = T([0])([8])(rod);
var rod4 = T([0])([9])(rod);
var c = tube(0.1, 1);
var c2 = tube(0.1, 9);
var cRotated = ROTATE([2,0])(PI/2)(c);
var c2Rotated = ROTATE([2,0])(PI/2)(c2);
var verticalrod1 = T([2])([0.1])(cRotated);
var verticalrod2 = T([2])([1.1])(c2Rotated);
var verticalrod3 = T([2])([2.1])(c2Rotated);
var other = T([2])([3.1])(STRUCT(REPLICA(5)([cRotated, T([2])([1])])));
var verticalrod4 = T([2])([8.1])(c2Rotated);
var verticalrod5 = T([2])([9.1])(c2Rotated);
var verticalrod6 = T([2])([10.1])(cRotated);
var shortrod = STRUCT([verticalrod1, other]);
var firstLine = STRUCT([rod, rod2, rod3, rod4, verticalrod2, verticalrod3, verticalrod4, verticalrod5, verticalrod6, shortrod, T([0])([8])(shortrod), T([0])([8])(verticalrod6)]);
var secondLine = T([1])([3])(firstLine);
var xSurface = STRUCT([firstLine, secondLine]);

//creating the Y STRUCTURE

var horizontalrod1 = T([1])([1])(rod);
var hotizontalrod2 = T([1])([2])(rod);
var ch = tube(0.1, 3);
var chorizontal = ROTATE([2,1])(PI*(3/2))(ch);
var otherhorizontal = T([2])([0.1])(STRUCT(REPLICA(11)([chorizontal, T([2])([1])])));
var horizontal1 = STRUCT([horizontalrod1, hotizontalrod2, otherhorizontal]);
var horizontal2 = T([0])([9])(horizontal1);
var ySurface = STRUCT([horizontal1, horizontal2]);

// creating other rods

var st = triangle(0.05, 1.2);
var triangleList = T([0,2])([1.5,1.1])(STRUCT(REPLICA(4)([st, T([0])([1.5])])));
var triangleList2 = T([1])([3])(triangleList);
var triangleList3 = T([0,2])([1.5,8.1])(STRUCT(REPLICA(4)([st, T([0])([1.5])])));
var triangleList4 = T([1])([3])(triangleList3);
var AllTriangle = STRUCT([triangleList, triangleList2, triangleList3, triangleList4]);
var rodbedTmp = ROTATE([2,0])(PI/2)(tube(0.05, 9));
var rodsbedHorizontal = T([1,2])([0.5,2.1])(STRUCT(REPLICA(5)([rodbedTmp, T([1])([0.5])])));
var rodbedTmp2 = ROTATE([2,1])(PI*(3/2))(tube(0.05, 3));
var rodsbedVertical = T([0,2])([0.5,2.1])(STRUCT(REPLICA(16)([rodbedTmp2, T([0])([0.5])])));
var rodsbedTmp = STRUCT([rodsbedHorizontal, rodsbedVertical])
var rodsbed = STRUCT([rodsbedTmp, T([2])([7])(rodsbedTmp)]);

//creating the shelves

var shelfTmp = CUBOID([1, 3, 0.1]);
var rodshelf = T([0,1,2])([0.05,0.04,0.05])(ROTATE([2,0])(PI*(1/4))(tube(0.05, 1.5)));
var shelfWithrods = STRUCT([shelfTmp, rodshelf, T([1])([2.91])(rodshelf)]);
var shelf = T([0,2])([-1,0.1])(shelfWithrods);
var shelf1 = T([2])([6.1])(shelf);
var shelf2 = T([2])([8.1])(shelf);
var shelf3 = T([0])([9])(ROTATE([0,0])(PI)(shelf1));
var shelf4 = T([0])([9])(ROTATE([0,0])(PI)(shelf2));
var shelfTmp2 = CUBOID([1.5, 3, 0.1]);
var shelf5 = T([0,2])([9,4.1])(shelfTmp2);
var rodshelf2 = T([0,1,2])([9.05,0.04,3.15])(ROTATE([2,0])(PI*(1/4))(tube(0.05, 1.4)));
var shelfUnder = STRUCT([shelf5, rodshelf2, T([1])([2.91])(rodshelf2)]);
var shelves = STRUCT([shelf1, shelf2, shelf3, shelf4, shelfUnder]);

//creatinf the baskets

var basket = basket();
var basket1 = T([0,2])([-1,3])(basket);
var basket2 = T([0,1,2])([-1,2,3])(basket);
var baskets = STRUCT([basket1, basket2]);

//creating the bed
var bed = COLOR([255,255,255])(T([0,1,2])([0.1,0.1,2.2])(CUBOID([8.8, 2.8, 0.8])));

//creating the box

var box = COLOR([0.8,0.51,0.4])(T([0,1])([0.25,0.5])(CUBOID([1.5, 2, 0.6])));
var cap = COLOR([0.8,0.51,0.4])(T([0,1,2])([0.15,0.4,0.6])(CUBOID([1.7, 2.2, 0.2])));
var scc = STRUCT([box, cap]);
var scct = T([2])([9.2])(scc);

// creating books
var book1 = COLOR([0,0,0])(CUBOID([0.6, 0.3, 1]));
var book2 = T([1])([0.3])(COLOR([255,0,0])(CUBOID([0.6, 0.3, 0.8])));
var book3 = T([1])([0.6])(COLOR([0,0,255])(CUBOID([0.6, 0.3, 0.9])));
var books = T([0,1,2])([9.2,1.7,6.3])(STRUCT([book1, book2, book3]));

var model = STRUCT([xSurface, ySurface, AllTriangle, rodsbed, shelves, baskets, bed, scct, books]);
DRAW(model);
