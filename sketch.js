function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  
  var hr = hour();
  var mn = minute();
  var sc = second();

if(keyDown("space")){
  hr = 0;
  mn=0;
  sc=0;
}
if(hr == 0){   
  text("TIME UP!", 400, 150, 100,100)
  console.log("Time Up!")
}

text("You can either wait until 12 o'clock OR click the space key",250,150,100,100)

text(hr%12 + ":", 400, 200, 50, 50)
text(mn%60 + ":", 420, 200, 50, 50)
text(sc%60, 440, 200, 50, 50)
  console.log("Hour "+ hr%12 + " .Minute " +mn+ " .Second " +sc+ " .")
  drawSprites();
}