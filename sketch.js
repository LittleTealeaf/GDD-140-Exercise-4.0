/// <reference path="./libraries/p5.global-mode.d.ts" />

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(255);

  for(var x = 0; x < width; x+=75) {
    ellipse(x,height/2,50,50);
  }
}
