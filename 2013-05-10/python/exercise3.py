#Exercise3
#Generate a 3D model of a racing car wheel (see, e.g. here), and mount four wheel instances in the 2.5D car mock-up.

from pyplasm import *

domain = INTERVALS(1)(32);

# =============================================
# TORUS function
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

#gomma

t =COLOR([0,0,0])(TORUS([0.5,1])([20,20]));

#cerchione

t2 =TORUS([0.4,0.7])([20,20]);
c1 =T(3)(-0.08)(CYLINDER([0.08,0.16])(5))
c2 =T(3)(-0.1)(CYLINDER([0.05,0.37])(32))
c2r = R([1,3])(PI/2)(c2)
c2t = T(1)(0.3)(c2r)
tire = STRUCT(NN(5)([c2t,R([1,2])(2*PI/5)]))

#ruota
wheel = STRUCT([t,t2,c1,tire])

#4 ruote
wheels =STRUCT([(T(1)(3.6)(wheel)),(T(1)(13.4)(wheel)),(T([1,3])([3.6,7.1])(wheel)),(T([1,3])([13.4,7.1])(wheel))]) 


car = STRUCT([XYprofile,YZprofile,XZprofile,wheels]);
VIEW(car);