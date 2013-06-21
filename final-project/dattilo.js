/**
 * @author Alessio Ciccarelli
 */

// function to create a tube

function tube(r,h){
	var domaint = DOMAIN([[0,1],[0,2*PI]])([32,32]);
	var tube = CYL_SURFACE([r,h])(32);
	var basetmp = BEZIER(S0)([[r,0,0],[r,0,0],[0,0,0]]);
	var mappingbase = ROTATIONAL_SURFACE(basetmp);
	return tube;
}

// function to create a tube


function tubeBase(r,h){
	var domaint = DOMAIN([[0,1],[0,2*PI]])([16,16]);
	var tube = CYL_SURFACE([r,h])(16);
	var basetmp = BEZIER(S0)([[r,0,0],[r,0,0],[0,0,0]]);
	var mappingbase = ROTATIONAL_SURFACE(basetmp);
	var base = MAP(mappingbase)(domaint)
	var baset = T([2])([h])(base);
	return STRUCT([tube,base,baset]);
}

// function to create a picket

function picket() {
	var c1 = CUBOID([1,0.1,9]);
	var c2 = T([2])([9])(CUBOID([1,0.2,0.1]));
	var c3 = T([1])([0.2])(c1);
	return COLOR([0,0,0])(STRUCT([c1,c2,c3]));
}

// function to create a surface with bezier curve 

	function bezier_surface (controlpoints,dim,domain) {
	var curve = BEZIER(dim)(controlpoints);
	var mapping = ROTATIONAL_SURFACE(curve);
	return MAP(mapping)(domain);
}
	
	function wire(points) {
		
var domain = INTERVALS(1)(32);
var curveMapping = BEZIER(S0)(points);
var curve = MAP(curveMapping)(domain);

return curve;

} 

// creating the external surface

var outline = T([2])([2])(COLOR([255,255,255])(tube(5,7)));
var picket = picket();
var picket1 = T([0,1])([-0.25,4.7])(picket);
var picket2 = T([0,1])([-4.3,-2.2])(ROTATE([0,1])(PI*(1.2/2))(picket));
var picket3 = T([0,1])([3.5,-3.05])(ROTATE([0,1])(PI*(-1.5/2))(picket));
var domaint = DOMAIN([[0,1],[0,2*PI]])([16,16]);
var basetmp = BEZIER(S0)([[1,0,9.1],[1,0,9.1],[0,0,9.1]]);
var mappingbase = ROTATIONAL_SURFACE(basetmp);
var base = COLOR([0,0,0])(MAP(mappingbase)(domaint));
var rod = COLOR([0,0,0])(T([1,2])([0.6,9])(CUBOID([0.5,4.2,0.1])));
var rod2 = T([1])([-0.25])(ROTATE([0,1])(PI*(1.25/2))(rod));
var rod3 = ROTATE([0,1])(PI*(-1.5/2))(rod);

// creating lamp and internal surfaces
var underLamp = COLOR([0,0,0])(T([2])([4])(tubeBase(0.25,0.5)));
var c1 = [[0.25,0,4.5],[0.5,0,4.75],[0.75,0,5]];
var curve1 = COLOR([0,0,0])(bezier_surface(c1,S0,domaint));
var c2 = [[0.75,0,5],[0.75,0,5.25],[1.25,0,6],[0,0,7]];
var curve2 = COLOR([255,255,0])(bezier_surface(c2,S0,domaint));
var overLamp = COLOR([0,0,0])(T([2])([7])(tube(0.05,2)));
var wirePoints = [[0,0,4],[0,0,3.5],[1,0,3],[2,0,2],[4,0,1],[7,0,0.5],[11,0,0.5]];
var f = wire(wirePoints);

var model = STRUCT([outline,picket1,picket2,picket3,base,rod,rod2,rod3,underLamp,curve1,curve2,overLamp,f]);
DRAW(model);
