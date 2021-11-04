var box1


function setup() {
  createCanvas(400,400);
  box1=createSprite(40,40,40,40)
  box1.shapeColor='blue'
}

function draw() 
{
  background('red');
  if(keyIsDown(RIGHT_ARROW)) {
    box1.position.x=box1.position.x+5
  }
  if(keyDown('left')) {
    box1.position.x=box1.position.x-5
  }
  drawSprites()
}




