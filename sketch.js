var pa = [];
var bat, pinata, candy1, candy2, candy3, candy4, candy5, candy6;
var candy;

function preload(){
  imageMode(CENTER);
  bat = loadImage('images/bat.png');
  pinata = loadImage('images/pinata.png');
  candy1 = loadImage('images/candy1.png');
  candy2 = loadImage('images/candy2.png');
  candy3 = loadImage('images/candy3.png');
  candy4 = loadImage('images/candy4.png');
  candy5 = loadImage('images/candy5.png');
  candy6 = loadImage('images/candy6.png');
}

function setup(){
  createCanvas(640, 480);
  pa[0] = new Particle(width/2, height/2);
  noStroke();
}

function draw(){
  background(100);
  image(pinata, width/2-30, height/2-50, 350, 350);
  for(var i = 0; i < pa.length; i++){
    pa[i].display();
    pa[i].move();
  }
  if(mouseIsPressed){
    rotate(-PI/3);
    image(bat, mouseX, mouseY, 40, 200);
  } else{
    image(bat, mouseX, mouseY, 40, 200);
  }
}

function mouseReleased(){
  pa[pa.length] = new Particle(width/2-30, height/2-50);
  pa[pa.length] = new Particle(width/2-30, height/2-50);
  pa[pa.length] = new Particle(width/2-30, height/2-50);
  pa[pa.length] = new Particle(width/2-30, height/2-50);
}

function Particle(tempX, tempY){
  this.posX = tempX;
  this.posY = tempY;

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
    if(this.posX > 635){
      this.vx *= -1;
    }

  }

  this.display = function(){
    candy = random(0,6);

    if(candy > 0 && candy < 1){
      image(candy1, this.posX, this.posY, 60, 40);
    }
    if(candy > 1 && candy < 2){
      image(candy2, this.posX, this.posY, 60, 40);
    }
    if(candy > 2 && candy < 3){
      image(candy3, this.posX, this.posY, 60, 40);
    }
    if(candy > 3 && candy < 4){
      image(candy4, this.posX, this.posY, 60, 40);
    }
    if(candy > 4 && candy < 5){
      image(candy5, this.posX, this.posY, 60, 40);
    }
    if(candy > 5 && candy < 6){
      image(candy6, this.posX, this.posY, 60, 40);
    }
  }

}
