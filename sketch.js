/// <reference path="./libraries/p5.global-mode.d.ts" />

var radStep = Math.PI / 9;
var distanceStep = 1;
var count = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(255);

  // for(var x = 0; x < width; x+=75) {
  //   // ellipse(x,height/2,50,50);
  // }
  for(var i = 0; i < count; i++) {
    fill(i / count * 255);
    var x = width / 2 + Math.cos(radStep * i) * distanceStep * i;
    var y = height / 2 + Math.sin(radStep * i) * distanceStep * i;
    var size = (count-i) * count / count;
    ellipse(x,y,size,size);
  }
}
