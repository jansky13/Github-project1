function setup() {
createCanvas(500, 500);
background(50);
}

let r = 20;
function draw() {
fill(0);
rect(250,350,10,150);
rect(220,50,70,300);
  fill(r);
  ellipse(255, 130, 50, 50);

  if (keyIsPressed === true) {
   fill(50);
 } else {
   fill(150);
 }
  ellipse(255, 200, 50, 50);
  fill(230);
  ellipse(255, 270, 50, 50);

}

function mouseClicked() {
  if (r === 20) {
    r = 200;
  } else {
    r = 20;
  }
}
