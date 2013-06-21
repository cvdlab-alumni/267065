/**
 * @author Alessio Ciccarelli
 */

// function to create a surface with a bezier surface

function bezier_surface (controlpoints,dim,domain) {
	var surface = BEZIER(dim)(controlpoints);
	var mapping = ROTATIONAL_SURFACE(surface);
	return MAP(mapping)(domain);
}

// function to create a tube

function tube(r,h){
	var domaint = DOMAIN([[0,1],[0,2*PI]])([16,16]);
	var tube = CYL_SURFACE([r,h])(16);
	var basetmp = BEZIER(S0)([[r,0,0],[r,0,0],[0,0,0]]);
	var mappingbase = ROTATIONAL_SURFACE(basetmp);
	var base = MAP(mappingbase)(domaint)
	var baset = T([2])([h])(base);
	return STRUCT([tube,base,baset]);
}



var domain = DOMAIN([[0,1],[0,2*PI]])([32,32]);

// creating the external surfaces

var c0 = [[0.25,0,10],[0.5,0,9.75],[0.75,0,9.5]];
var c1 = [[0.75,0,9.5],[0.5,0,9],[1.25,0,8.5]];
var c2 = [[1.25,0,8.5],[0.5,0,7.75],[1,0,7]];
var c3 = [[1,0,7],[0.5,0,6],[1.25,0,5]];
var c4 = [[1.25,0,5],[0.5,0,4.25],[1,0,3.5]];
var c5 = [[1,0,3.5],[0.5,0,3],[1,0,2.5]];
var c6 = [[1,0,2.5],[0.5,0,1.25],[1,0,0]];

var surface0 = bezier_surface(c0,S0,domain);
var surface1 = COLOR([255,255,255])(bezier_surface(c1,S0,domain));
var surface2 = COLOR([255,255,255])(bezier_surface(c2,S0,domain));
var surface3 = COLOR([255,255,255])(bezier_surface(c3,S0,domain));
var surface4 = COLOR([255,255,255])(bezier_surface(c4,S0,domain));
var surface5 = COLOR([255,255,255])(bezier_surface(c5,S0,domain));
var surface6 = COLOR([255,255,255])(bezier_surface(c6,S0,domain));


// creating the lamp's outlines

var circle1 = COLOR([(210/255),(210/255),(210/255)])(T([2])([9.5])(CIRCLE(0.75)(32)));
var circle2 = COLOR([(210/255),(210/255),(210/255)])(T([2])([8.5])(CIRCLE(1.25)(32)));
var circle3 = COLOR([(210/255),(210/255),(210/255)])(T([2])([7])(CIRCLE(1)(32)));
var circle4 = COLOR([(210/255),(210/255),(210/255)])(T([2])([5])(CIRCLE(1.25)(32)));
var circle5 = COLOR([(210/255),(210/255),(210/255)])(T([2])([3.5])(CIRCLE(1)(32)));
var circle6 = COLOR([(210/255),(210/255),(210/255)])(T([2])([2.5])(CIRCLE(1)(32)));
var circle7 = COLOR([(210/255),(210/255),(210/255)])(CIRCLE(1)(32));

// creating the lamp's bracket

var tube1 = COLOR([(210/255),(210/255),(210/255)])(T([2])([10])(tube(0.25,0.5)));
var tube2 = COLOR([(210/255),(210/255),(210/255)])(T([2])([10.5])(tube(0.05,3)));

var circles = STRUCT([circle1,circle2,circle3,circle4,circle5,circle6,circle7]);
var lamp = STRUCT([surface0,surface1,surface2,surface3,surface4,surface5,surface6,circles,tube1,tube2]);
DRAW(lamp);

