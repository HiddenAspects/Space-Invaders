//Drop Constructor Function---------------
function Drop(x, y) {
  this.x = x;
  this.y = y;
  
  this.show = function() {
    noStroke();
    fill(155, 0, 255);
    ellipse(this.x, this.y, 16, 16);
  };
  
  this.move = function() {
    this.y = this.y -5;
  };
}