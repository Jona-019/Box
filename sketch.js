var box1
var box2
function setup() {
  createCanvas(400,400);
  box1 = createSprite(10,10,10,10);
  box2 = createSprite(390,390,10,10);
}

function draw() 
{ var v = box1.position
  background(30);

  if (keyIsDown(RIGHT_ARROW)){
    v.x = v.x +1;
  }
  if (keyIsDown(LEFT_ARROW)){
    box1.position.x = box1.position.x -1;
  }
  if  (keyIsDown(UP_ARROW)){
    box1.position.y = box.position.y -1
  }
  if (keyIsDown(DOWN_ARROW)){
    box1.position.y = box1.position.y +1
  }

  drawSprites();
}




