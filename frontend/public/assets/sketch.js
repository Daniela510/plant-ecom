let blue = 135;
let green = 240;
let gradientVar = 1;

function setup() {
  let cnv = createCanvas( innerWidth, innerHeight);
  cnv.class('p5-canvas')
  cnv.parent('main');
  background(235, 221, 207);
}

function draw() {
  background(235, 221, 207, 55);
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

let variableEllipse = (x, y, px, py) => {
  let speed = abs(x - px) + abs(y - py);
  noStroke();
  fill(255, blue, green)
  ellipse(x, y, 50,50);
  if (speed>0) { 
    gradient(); 
 }
}

let gradient = () => {
  
  if(gradientVar){
    blue += 3;
    green -= 7;
    if( blue === 195 || green === 100) {
    gradientVar = 0
  } 
  } else {
    blue -=3;
    green += 7;
    if( blue === 135 || green === 240) {
    gradientVar = 1
  } 
  }
}