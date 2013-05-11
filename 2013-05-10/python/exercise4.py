#Exercise4
#Generate the 3D model of a steering wheel (volante :o) specifically designed for Formula and Sport cars (look on the web for common shapes).
# Mount it the the 2.5D mock-up.

from pyplasm import *

domain = INTERVALS(1)(32);

# =============================================
# TORUS funtion
# =============================================

def TORUS (radius):
    r1 , r2 = radius
    def TORUS0 (subds):
        N , M = subds
        a=0.5*(r2-r1)
        c=0.5*(r1+r2)
        domain=Plasm.power(  INTERVALS(2*PI)(N),  INTERVALS(2*PI)(M)  )
        fx =   lambda p: (c+a*math.cos(p[1])) * math.cos(p[0])
        fy =   lambda p: (c+a*math.cos(p[1])) * math.sin (p[0])
        fz =   lambda p: a*math.sin(p[1])
        return MAP(([fx,fy,fz]))(domain)
    return TORUS0

#volante

v1 =TORUS([0.6,0.8])([30,30]);
int1 =T([1,3])([0.1,-0.08])(CYLINDER([0.3,0.16])(32))

cub2 = CUBOID([0.5,0.3,0.1])
cubs2 = T([1,2,3])([0.2,-0.15,-0.05])(cub2)

cub1 = CUBOID([0.5,0.2,0.1])
cubs1 = T([1,2,3])([0.2,-0.1,-0.05])(cub1)
cubs1r = R([1,2])(PI/2)(cubs1) 
cubs3r = R([1,2])(PI)(cubs1r) 
swheel = COLOR([0,0,0])(STRUCT([v1,int1,cubs1r,cubs3r,cubs2]));

#posiziono il volante
swheelr = R([1,3])(PI/2)(swheel)
swheelr2 = R([2,3])(PI/2)(swheelr)
swheelt = T([1,2,3])([4.5,1.9,5.5])(swheelr2)

car = STRUCT([XYprofile,YZprofile,XZprofile,wheels,swheelt]);
VIEW(car);