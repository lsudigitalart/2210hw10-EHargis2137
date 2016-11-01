var x = []; //creating an empty array
//var x = [12, 342] //same as line 6 snd 7

function setup(){
  createCanvas(320, 240);
  //x[0] = -20; //assigning a value to the first position in an array
  //x[1] = 20;
  for(var i = 0; i < 3000; i++){
    x[i] = random(-1000, 1000);
  }

  println(x); //show the array in console
}

  function draw(){
    background(0);

    for(var i = 0; i < x.length; i++){
      x[i]++;
      var y = i * 0.33;
      ellipse(x[i], y, 10);
    }

    // x[0]++;
    // x[1]++;

    // ellipse(x[0], 20, 20);
    // ellipse(x[1], 50, 20);
  }
