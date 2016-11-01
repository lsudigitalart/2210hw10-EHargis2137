// var x1 = 10;
// var x2 = 20;
// var x3 = 30;

var x = []; //creating an empty array

function setup(){
  createCanvas(320, 240);
  background(0);

  for(var i = 0; i < 3000; i++){
    x[i] = random(0, 1000);
  }
}

function draw(){
  // x1 += 0.5;
  // x2 += 0.5;
  // x3 += 0.5;

  // ellipse(x1, 20, 20);
  // ellipse(x2, 50, 20);
  // ellipse(x3, 100, 20);

  for(var i = 0; i < x.length; i++){
    x[i] += 0.5;
    var y = i * 0.4;
    ellipse(x[i], y, 20);
  }
}
