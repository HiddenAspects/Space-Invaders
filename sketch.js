//Har utgått från https://www.youtube.com/watch?v=biN3v3ef-Y0

//Om jag ska lägga in det här i en VSCode: han verkar skapa  html script-tags för varje objekt eller nåt. se videon.

var ship;
var flowers = [];
var drop = [];

function setup() {
  createCanvas(600, 500);
  ship = new Ship();
  drop = new Drop(30, 30);
  for (var i = 0; i < 6; i++) {
    flowers[i] = new Flower(i * 80 + 80, 60); //~det inom parantes är the values that the cunstructor function arguments (döpta till x and y) recieves
  }


}

function draw() {
  background(30);
  ship.show();
  drop.show();
  drop.move();
  //Loop flowers
  for (var i = 0; i < flowers.length; i++) {
    flowers[i].show();
  }
  //However many drops there are, call the show and move function
    for (var i = 0; i < drop.length; i++) {
    drop[i].show();
    drop[i].move();  
  }
  
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  } else if (keyCode === LEFT_ARROW)
    ship.move(-1);
}








