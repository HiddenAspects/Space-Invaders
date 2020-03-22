//Ship Constructor Function-------------
function Ship() {
  this.x = width / 2;

  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height - 20, 20, 20);

    this.move = function(dir) { //dir for direction?
      this.x += dir * 5 // The addition assignment operator ( += ) adds a value to a variable.
    }
  }
}