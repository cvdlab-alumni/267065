from pyplasm import *

###definisco la grid
GRID = COMP([INSR(PROD),AA(QUOTE)])

###floor0
ground = GRID([[21.3],[12.7]])
square = T([1,2])([2.9,4.5])(GRID([[13.2],[8.2],[0.6]]))
cylinder =T([1,2])([4,3.7])(CYLINDER([1.1,0.6])(32))
rectangle = T([1,2])([2.9,3.7])(CUBOID([2.2,0.8,0.6]))
semicirc = STRUCT([cylinder,rectangle])

cylinderg =T([1,2])([17.8,10.25])(CYLINDER([2.46,0.6])(32))
rectangleg= T([1,2])([18,7.8])(R([1,2])(PI/2)(CUBOID([4.9,2.1,0.6])))
semicircg= STRUCT([cylinderg,rectangleg])

square2=T([2])([10])(CUBOID([2.9,2.7,0.6]))
square3=T([1,2])([16,6.3])(CUBOID([0.6,1.5,0.6]))

floor0=STRUCT([ground,semicirc,square,semicircg,square2,square])


###floor1

floortmp1 = CUBOID([21.3,0.5,0.6])
floortmp2 = CUBOID([9,12.2,0.6])
floortmp3 = CUBOID([2.5,10.5,0.6])
floortmp4 = CUBOID([9.8,12.2,0.6])
floor1b = STRUCT([floortmp2,T(2)(12.2)(floortmp1),T(1)(9)(floortmp3),T(1)(11.5)(floortmp4)])
balconytmp = CUBOID([2,2,0.6])
plate1 = CUBOID([2,0.2,2])
plate2 = CUBOID([0.2,2,2])
plate3 = T(2)(1.8)(plate1)
balcony = STRUCT([balconytmp,plate1,plate2,plate3])
floortmp = STRUCT([floor1b,T([1,2])([-2,10.3])(balcony)])
floor1 = T(3)(4.5)(floortmp)


###floor2
floortmp1 = CUBOID([21.3,0.5,0.6])
floortmp2 = CUBOID([10.3,12.2,0.6])
floortmp3 = CUBOID([3.5,10.5,0.6])
floortmp4 = CUBOID([7.5,12.2,0.6])
floor2b = STRUCT([floortmp2,T(2)(12.2)(floortmp1),T(1)(10.3)(floortmp3),T(1)(13.8)(floortmp4)])
floor2 = T(3)(9.6)(floor2b)

###floor3
floortmp1 = CUBOID([21.3,0.5,0.6])
floortmp2 = CUBOID([11.3,12.2,0.6])
floortmp3 = CUBOID([3.5,10.5,0.6])
floortmp4 = CUBOID([6.5,12.2,0.6])
floor3b = STRUCT([floortmp2,T(2)(12.2)(floortmp1),T(1)(11.3)(floortmp3),T(1)(14.8)(floortmp4)])
floor3 = T(3)(14.7)(floor3b)

###floor4
floortmp1 = T(2)(9.7)(CUBOID([21.3,3,0.6]))
floortmp2 = T(1)(10.4)(CUBOID([10.9,12.7,0.6]))
floor4b = STRUCT([floortmp1,floortmp2])
floor4 = T(3)(19.8)(floor4b)

building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4])
VIEW(building)