var ball 

function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,20,20)
}

function draw() 
{
  background("YELLOW");
  if (keyIsDown(RIGHT_ARROW)) {
    background("RED");
  }
  drawSprites();
}




