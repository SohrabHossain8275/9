var box 
var bocks

function setup() {
  createCanvas(400,500);
  box = createSprite(200,200,20,20);
  bocks = createSprite(300,300,30,20);
  bocks.shapeColor = rgb(192,64,64)
}

function draw() 
{
  background(rgb(128,255,128));
  drawSprites();
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x += 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y += 5;
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y -= 5;
  }
}




