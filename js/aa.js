

//第一张图片
var x1 = Math.random()*1000,y1 = Math.random()*1000
var xin1 = true, yin1 = true 
var step1 = 0.4 
var delay1 = 5 
var obj1=document.getElementById("codefans_net1") 
function float1() { 
var L1=T1=0
var R1= document.body.clientWidth-obj1.offsetWidth 
var B1 = document.body.clientHeight-obj1.offsetHeight 
obj1.style.left = x1 + document.body.scrollLeft 
obj1.style.top = y1 + document.body.scrollTop 
x1 = x1 + step1*(xin1?1:-1) 
if (x1 < L1) { xin1 = true; x1 = L1} 
if (x1 > R1){ xin1 = false; x1 = R1} 
y1 = y1 + step1*(yin1?1:-1) 
if (y1 < T1) { yin1 = true; y1 = T1 } 
if (y1 > B1) { yin1 = false; y1 = B1 } 
}

var itl1= setInterval("float1()", delay1) 
