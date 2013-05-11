#Exercise5
#Create at least two interesting car surfaces and add them to the mock-up.

from pyplasm import *

domain = INTERVALS(1)(32);

###surface 1 - la prima superfice che ho implementato è stata il tetto

p1 = [[6.5,3.3,0],[6.5,3.2,5.5],[6.5,3.3,11.5],[6.5,3.4,5.5],[6.5,3.3,0]];
c0 = BEZIER(S1)(p1);
f1 = MAP(c0)(domain);

p2 = [[9.8,3.5,0],[9.8,3.4,5.5],[9.8,3.5,11.5],[9.8,3.6,5.5],[9.8,3.5,0]];
c1 = BEZIER(S1)(p2);
f2 = MAP(c1)(domain);

p3 = [[10.5,3.7,0],[10.5,3.6,5.5],[10.5,3.7,11.5],[10.5,3.8,5.5],[10.5,3.7,0]];
c2 = BEZIER(S1)(p3);
f3 = MAP(c2)(domain);

p4 = [[13.5,3.2,0],[13.5,3.1,5.5],[13.5,3.2,11.5],[13.5,3.3,5.5],[13.5,3.2,0]];
c3 = BEZIER(S1)(p4);
f4 = MAP(c3)(domain);

p5 = [[16,3,0],[16,2.9,5.5],[16,3,11.5],[16,3.1,5.5],[16,3,0]];
c4 = BEZIER(S1)(p5);
f5 = MAP(c4)(domain);

domain2 = INSR (PROD)([INTERVALS(1)(10),INTERVALS(1)(20)])
s = BEZIER(S2)([c0,c1,c2,c3,c4]);
surface1 = COLOR([0,0,0])(MAP(s)(domain2));

###surface2 - la seconda superficie che ho implementato sono stati i finestrini laterali

p6 = [[4.5,2,0]];
c5 = BEZIER(S1)(p6);
f6 = MAP(c6)(domain);

p7 = [[6.3,2.1,0],[6.3,2.9,-0.1],[6.3,4.4,0],[6.3,2.9,0.1],[6.3,2.1,0]];
c6 = BEZIER(S1)(p7);
f7 = MAP(c6)(domain);

p8 = [[8,2.3,0],[8,3.2,-0.1],[8,4,0],[8,3.2,0.1],[8,2.3,0]];
c7 = BEZIER(S1)(p8);
f8 = MAP(c7)(domain);

p9 = [[10,2.5,0],[10,3.2,-0.1],[10,4,0],[10,3.2,0.1],[10,2.5,0]];
c8 = BEZIER(S1)(p9);
f9 = MAP(c8)(domain);

p10 = [[12,2.8,0]];
c9 = BEZIER(S1)(p10);
f10 = MAP(c9)(domain);

s2 = BEZIER(S2)([c5,c6,c7,c8,c9]);
sur2tmp = COLOR([0,255,255])(MAP(s2)(domain2));
sur2t = T(3)(7.1)(sur2tmp)
surface2 = STRUCT([sur2tmp,sur2t])



car = STRUCT([XYprofile,YZprofile,XZprofile,wheels,swheelt,surface1,surface2]);
VIEW(car);