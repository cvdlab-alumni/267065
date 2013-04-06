from pyplasm import *

###definisco la grid
GRID = COMP([INSR(PROD),AA(QUOTE)])

###pillars0 creo i pilastri del piano terra, la prima fila è cilindrica mentre la seconda quadratica
cylinder = CYLINDER([0.25,4.5])(32)
cylinders = T([1,2])([0.25,0.25])(STRUCT(NN(5)([cylinder,T([1])([5.2])])))
secondLine = GRID([[0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5],[-10,0.5],[4.5]])
pillars0 = STRUCT([cylinders,secondLine])

###pillars1 creo i pilastri del floor1
pillars1 = GRID([[0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5],[0.5,-9.5,0.5],[-5.1,4.5]])

###pillars2 creo i pilastri del floor2, le due file di pilastri sono in numero diversi quindi creo due differenti grid e poi faccio la struct
firstLine2 = GRID([[0.5,-4.7,0.5,-15.1,0.5],[0.5],[-10.2,4.5]])
secondLine2 = GRID([[0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5,-4.7,0.5],[-10,0.5],[-10.2,4.5]])
pillars2 = STRUCT([firstLine2,secondLine2])

###pillars3 creo i pilastri del floor3, creo tre diverse griglie perchè le file hanno un numero diverse di pilastri ed inoltre alcuni pilastri della seconda fila sono di dimensione diversa
firstLine3 = GRID([[-10.4,0.5,-9.9,0.5],[0.5],[-15.3,4.5]])
secondLineLittle3 = GRID([[0.25,-4.95,0.25],[-10,0.25],[-15.3,4.5]])
secondLine3 = GRID([[-10.4,0.5,-4.7,0.5,-4.7,0.5],[-10,0.5],[-15.3,4.5]])
pillars3 = STRUCT([firstLine3,secondLineLittle3,secondLine3])

building = STRUCT([pillars0,pillars1,pillars2,pillars3])
VIEW(building)