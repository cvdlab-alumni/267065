from pyplasm import *

###color windows south vertical enclosures

allwindowssouthblack = COLOR(BLACK)(allwindowssouth)
southenclWithWindows = STRUCT([southencl,allwindowssouthblack])

###color windows west vertical enclosures

windowswestblack = COLOR(BLACK)(windowswest)
westenclWithWindows = T(2)(11.7)(STRUCT([westencl,windowswestblack]))

###color windows est vertical enclosures
windowsestblack = COLOR(BLACK)(windowsest)
estenclWithWindows = STRUCT([estencl,windowsestblack])

###color windows north vertical enclosures

windows1tmpblack = COLOR(BLACK)(windows1tmp)
windows2tmpblack = COLOR(BLACK)(windows2tmp)
levelWithWindows = STRUCT([level,windows1tmpblack,windows2tmpblack])
levelWithWindows2 = T([3])([5.1])(levelWithWindows)
levelWithWindows3 = T([3])([10.2])(levelWithWindows)
northenclWithWindows = STRUCT([rect1,levelWithWindows,levelWithWindows2,levelWithWindows3]) 

northenclWithWindowsT = T([1])([21.3])(northenclWithWindows)


building = STRUCT([pillars0,pillars1,pillars2,pillars3,floor0,floor1,floor2,floor3,floor4,southenclWithWindows,westenclWithWindows,estenclWithWindows,northenclWithWindowsT])
VIEW(building)