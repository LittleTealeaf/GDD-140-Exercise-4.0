/// <reference path="./libraries/p5.global-mode.d.ts" />

//How much it should rotate each iteration
var radStep = Math.PI / 9;
//How far away from the center should the ellipses be moved each iteration
var distanceStep = 1;
//Total count of the ellipses
var count = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(255);

  for(var i = 0; i < count; i++) {
    //Set the fill to start as black and approach white
    fill(i / count * 255);
    //set x and y to gradually ratiate and grow away from the center
    var x = width / 2 + Math.cos(radStep * i) * distanceStep * i;
    var y = height / 2 + Math.sin(radStep * i) * distanceStep * i;
    //Sets thes size to shrink as the circle gets further away
    var size = (count-i) * count / count;
    //Draw the ellipse
    ellipse(x,y,size,size);
  }
}
