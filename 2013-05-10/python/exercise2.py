#Exercise2
#Generate the 2D profile curves of the car envelope in the three coordinate directions, 
#embed them in 3D (in the x=0, y=0 and z=0 planes, respectively,
# with the reference frame origin set approximately at the car centroid) 
#and mount them together in a "two-and-a-half-dimensional" (2.5D) or "pseudo-3D" model.

from pyplasm import *

domain = INTERVALS(1)(32);

#XY profile

points = [[0,0],[0,0.5]];
p1 = POLYLINE(points);

points2 = [[0,0],[2.2,0]];
p2 = POLYLINE(points2);

points3 = [[0,0.5,0],[1.2,2,0],[3,2.5,0]];
c1 = BEZIER(S1)(points3);
curve1 = MAP(c1)(domain);

points4 = [[2.2,0,0],[3.6,2,0],[5,0,0]];
c2 = BEZIER(S1)(points4);
curve2 = MAP(c2)(domain);

points5 = [[3,2.5,0],[6.5,3.8,0],[10.5,3.7,0],[13.5,3.2,0],[16,3,0]];
c3 = BEZIER(S1)(points5);
curve3 = MAP(c3)(domain);

points6 = [[5,0],[12,0]];
p3 = POLYLINE(points6);

points7 = [[12,0,0],[13.4,2,0],[14.8,0,0]];
c4 = BEZIER(S1)(points7);
curve4 = MAP(c4)(domain);

points8 = [[14.8,0],[16,0.5]];
p4 = POLYLINE(points8);

points9 = [[16,0.5],[16,3]];
p5 = POLYLINE(points9);

###windows - finestrini laterali

points10 = [[4.5,2,0],[6,3.3,0],[9.8,3.5,0],[12,2.8,0]];
c5 = BEZIER(S1)(points10);
curve5 = MAP(c5)(domain);

points11 = [[4.5,2,0],[7,2.2,0],[9.5,2.4,0],[12,2.8,0]];
c6 = BEZIER(S1)(points11);
curve6 = MAP(c6)(domain);

windows = STRUCT([curve5,curve6]);

###doors - sportelli laterali

door1 = [[6.5,2],[7,2.2]];
d1 = POLYLINE(door1);

door1b = [[6.5,0.3],[6.5,2]];
d1b = POLYLINE(door1b);

doorA = STRUCT([d1,d1b])

door2 = [[9.5,2.4],[9.8,2.2]];
d2 = POLYLINE(door2);

door2b = [[9.8,2.2],[10,2]];
d2b = POLYLINE(door2b);

door2c = [[9.5,0.3],[10,2]];
d2c = POLYLINE(door2c);

door2d = [[9.5,0.3],[6.5,0.3]];
d2d = POLYLINE(door2d);

#handles - maniglie sportelli

handle1 = [[9.5,2],[10,2]];
h1 = POLYLINE(handle1);

handle2 = [[9.5,2],[9.5,2.1]];
h2 = POLYLINE(handle2);

handle3 = [[9.5,2.1],[9.9,2.1]];
h3 = POLYLINE(handle3);

doorB = STRUCT([d2,d2b,d2c,d2d,h1,h2,h3])

firstProfile = STRUCT([p1,p2,curve1,curve2,curve3,p3,curve4,p4,p5,windows,doorA,doorB]);
secondProfile = T([3])([7.1])(firstProfile);
XYprofile = STRUCT([firstProfile,secondProfile]);

###YZ profile

points12 = [[0,0,0],[0,0,7.1]];
p6 = POLYLINE(points12);


points13 = [[0,0.5,0],[0,1,3.5],[0,0.5,7.1]];
cof = BEZIER(S1)(points13);
curvecof = MAP(cof)(domain);

points14 = [[0,0,0],[0,0.5,0]];
p8 = POLYLINE(points14);

p9 = T([3])([7.1])(p8);

points14 = [[16,0.5,0],[16,0.5,7.1]];
p10 = POLYLINE(points14);


points15 = [[16,3,0],[16,3.5,2.5],[16,3.5,5],[16,3,7.1]];
cd = BEZIER(S1)(points15);
curved = MAP(cd)(domain);

points16 = [[16,0.5,0],[16,3,0]];
p12 = POLYLINE(points16);

p13 = T([3])([7.1])(p12);

#function for circles (per tubi di scarico)

def tube(s):
    def t(p):
        alpha = p[0]
        return [s*COS(alpha), s*SIN(alpha)]
    return t

tube1 = MAP(tube(0.2))(INTERVALS(2*PI)(32))
t1 = R([1,3])(PI/2)(tube1)
t1t = T([1,2,3])([16,1,1])(t1)
t2t = T(3)(5)(t1t)
tubes = STRUCT([t1t,t2t])

points50 = [[0,0],[1,0]];
p50 = POLYLINE(points50);

points51 = [[0,0],[0,0.45]];
p51 = POLYLINE(points51);

p50t = T(2)(0.45)(p50)

p51t = T(1)(1)(p51)

# lights - luci anteriori e posteriori

lights=STRUCT([p50,p50t,p51,p51t]);
lightsr = R([1,3])(PI/2)(lights)
lightsrt = T([1,2,3])([16,2,0.5])(lightsr)
lightsrt2 = T(3)(5)(lightsrt)
lightsrta = T([2,3])([0.1,0.5])(lightsr)
lightsrta2 = T(3)(5)(lightsrta)
lightsA =STRUCT([lightsrta,lightsrta2])
lightsP = STRUCT([lightsrt,lightsrt2])

thirdProfile = STRUCT([p6,curvecof,p8,p9]);
Fprofile = STRUCT([p10,curved,p12,p13,tubes,lightsP,lightsA]);

YZprofile = STRUCT([thirdProfile,Fprofile]);

###XZ profile

#bringings 

points17 = [[1,1.5,0.5],[2.2,2.2,0.2]];
c7 = BEZIER(S1)(points17);
curve7 = MAP(c7)(domain);

points18 = [[1,1.5,1.3],[2.2,2.2,0.7]];
c8 = BEZIER(S1)(points18);
curve8 = MAP(c8)(domain);

points19 = [[1,1.5,0.5],[1,1.5,1.3]];
p19 = POLYLINE(points19);

points20 = [[2.2,2.2,0.2],[2.2,2.2,0.7]];
p20 = POLYLINE(points20);

points21 = [[1,1.5,5.7],[2.2,2.2,6.2]];
c9 = BEZIER(S1)(points21);
curve9 = MAP(c9)(domain);

points22 = [[1,1.5,6.6],[2.2,2.2,6.7]];
c10 = BEZIER(S1)(points22);
curve10 = MAP(c10)(domain);

points23 = [[1,1.5,5.7],[1,1.5,6.6]];
p21 = POLYLINE(points23);

points24 = [[2.2,2.2,6.2],[2.2,2.2,6.7]];
p22 = POLYLINE(points24);

points25 = [[0,1,0],[1,1,0],[2,1,0],[1,0,0],[0,1,0]];
cp = BEZIER(S1)(points25);
curvep = MAP(cp)(domain);

bringing = STRUCT([curve7,curve8,p19,p20]);
bringing2 = STRUCT([curve9,curve10,p21,p22]);

bringings=STRUCT([bringing,bringing2]);

#glass - vetro anteriore

points30 = [[3,2.5,0.5],[6.5,3.3,1.2]];
cv1 = BEZIER(S1)(points30);
cglass1 = MAP(cv1)(domain);

points31 = [[3,2.5,6.5],[6.5,3.3,5.8]];
cv2 = BEZIER(S1)(points31);
cglass2 = MAP(cv2)(domain);

points32 = [[6.5,3.3,1.2],[6.5,3.3,5.8]];
pv = POLYLINE(points32);

points33 = [[3,2.5,0.5],[2.5,2.5,3.5],[3,2.5,6.5]];
cv3 = BEZIER(S1)(points33);
cglass3 = MAP(cv3)(domain);

glass = STRUCT([cglass1,cglass2,cglass3,pv])

#wing - alettone

points34 = [[14.5,3.5,0.5],[14.5,3.5,6.5]];
al1 = POLYLINE(points34);

points35 = [[15.5,3.5,0.5],[15.5,3.5,6.5]];
al2 = POLYLINE(points35);

points36 = [[14.5,3.5,0.5],[15.5,3.5,0.5]];
al3 = POLYLINE(points36);

points37 = [[14.5,3.5,6.5],[15.5,3.5,6.5]];
al4 = POLYLINE(points37);

points38 = [[14.9,3,1.5],[14.9,3.5,1.5]];
al5 = POLYLINE(points38);

points39 = [[15.1,3,1.5],[15.1,3.5,1.5]];
al6 = POLYLINE(points39);

points40 = [[14.9,3,5.5],[14.9,3.5,5.5]];
al7 = POLYLINE(points40);

points41 = [[15.1,3,5.5],[15.1,3.5,5.5]];
al8 = POLYLINE(points41);

wing = STRUCT([al1,al2,al3,al4,al5,al6,al7,al8])
XZprofile = STRUCT([bringings,glass,wing])

car = STRUCT([XYprofile,YZprofile,XZprofile]);
VIEW(car);
