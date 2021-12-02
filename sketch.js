let points = 60;
let factor = 0;
let radius;

function setup() {
  createCanvas(400, 400, WEBGL);
  radius = height / 2;
  angleMode(DEGREES);
  drawCircle(factor);
}

function draw() {
  background(0);
  rotateX(mouseX);
  rotateY(mouseY);
  drawCircle(factor);
  factor+=.01;
}

function drawCircle(factor) {
  noFill();
  stroke(255);
  let delta = 360 / points;
  for (let i = 0; i < points; i++) {
    push();
    let x1 = getVector(i).x;
    let y1 = getVector(i).y;
    let x2 = getVector(i * factor).x;
    let y2 = getVector(i * factor).y;
    line(x1,y1,x2,y2);
    pop();
  }
}

function getVector(index) {
  let angle = map(index, 0, points, 0, 360);
  let v = new p5.Vector.fromAngle(radians(angle));
  return v.mult(radius);
}