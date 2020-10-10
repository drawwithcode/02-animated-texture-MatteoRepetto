const distance = 15;
const diameter = 10;
let colorPalette = ["magenta", "yellow", "cyan"];
let colorPalette1 = ["red", "green", "blue"];
let cmyk = true;
let value = "black";
let col;
let click = 'Click to activate "RGB MODE"';


function preload(){
  // put preload code here
}


function setup(){
  createCanvas(windowWidth, windowHeight);
}


function draw() {

  background(value);

  push();
  fill("white");
  textSize(30);
  textAlign(CENTER);
  textFont('courier');
  text(click, windowWidth/2, windowHeight/2);
  pop();

	for (let x = - 10; x <= mouseX; x += distance) {
		for (let y = - 10; y <= height; y += distance) {
      if (cmyk === true){
        col = random(colorPalette);
      }
      else {
        col = random(colorPalette1);
      }
      push()
      noStroke();
			fill(color(col));
      rect(x,y, diameter, diameter);
      pop()
		}
	}
}



function mouseClicked() {
 if (cmyk === true && value === "black") {
   cmyk = false;
   value = "white";
   click = ' ';

   }
 else {
   cmyk = true;
   value = "black";
 }
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
}
