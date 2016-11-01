var pa = [];

function setup(){
  createCanvas(640, 480);
  pa[0] = new Particle(width/2, height/2);
  noStroke();
}

function draw(){
  background(0);
  for(var i = 0; i < pa.length; i++){
    pa[i].display();
    pa[i].move();
  }
}

function mouseReleased(){
  pa[pa.length] = new Particle(mouseX, mouseY);
}

function Particle(tempX, tempY){
  this.posX = tempX;
  this.posY = tempY;
  var particleSize = 10;

  this.vx = random(-10, 10);
  this.vy = random(-15, 15);
  var gravity = 1;

  this.move = function(){
    this.posX += this.vx;
    this.posY += this.vy;
    this.vy += gravity;

    if(this.posY > height){
      this.vy *= -0.5;
      this.vx *= 0.75;
      this.posY = height+1;
    }

    if(this.posX < 0){
      this.vx *= -1;
    }

  }

  this.display = function(){
    ellipse(this.posX, this.posY, particleSize);
  }

}
