var canvas = document.getElementById("myCanvas");
var color = "red";
var size = 40;
var width = 4;
ctx = canvas.getContext("2d");

function make_circle() {
ctx.beginPath();
ctx.strokeStyle = "color";
console.log("Default circle generated");
ctx.lineWidth = "4";
console.log("line width generated")
ctx.arc(100,100,40,0,2*Math.PI);
ctx.stroke();
} 

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    console.log("mousedown event taken");
var mouseX = e.clientX - canvas.offsetLeft;
var mouseY = e.clientY - canvas.offsetTop;
color = document.getElementById("color_input").value;
console.log(color + " is taken")
size = document.getElementById("size_input").value;
console.log(size + " taken")
width = document.getElementById("width_input").value;
console.log(width + " taken")
circle(mouseX,mouseY);
}
function circle(mouseX,mouseY){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.arc(mouseX,mouseY,100,0,2*Math.PI);
ctx.stroke;
}