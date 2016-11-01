var bugs = [];

function setup(){
  createCanvas(640, 480);
  background(0);
  for(var i = 0; i < 50; i++){
    var x = random(width);
    var y = random(height);
    var d = 20;
    bugs[i] = new JitterBug(x, y, d);
  }
}

function draw (){
  for(var i = 0; i < bugs.length; i++){
    bugs[i].move();
    bugs[i].display();
  }
}

function JitterBug(tempX, tempY, tempDiameter){ //constructor
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 2.5;

  this.move = function(){
    this.y += random(-this.speed, this. speed);
    this.x += random(-this.speed, this.speed);
  };

  this.display = function(){
    ellipse(this.x, this.y, this.diameter);
  };
}
