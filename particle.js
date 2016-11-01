var x, y, p;
var pa = [];

function setup(){
  createCanvas(640, 480);
  background(100);
  pa[0] = new Particle(width/2, height/2);
}

function draw(){
  background(100);

  for(var i = 0; i < pa.length; i++){
    p[i].move();
    p[i].display();
  }
}

function mouseReleased(){
  pa[pa.length+1] = new Particle(mouseX, mouseY);
}

function Particle(tempX, tempY){
  this.posX = tempX;
  this.posY = tempY;

  var vx = 10;
  var vy = -10;
  var gravity = 1;

  this.move = function(){
    this.posX += vx;
    this.posY += vy;
    vy += gravity;
  };

  this.display = function(){
    ellipse(this.posX, this.posY, 50);
    };
  }
