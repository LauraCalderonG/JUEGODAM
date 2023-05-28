var player

function preload(){
  
}

function setup() {
  createCanvas(600, 600);
  
  //crear sprite del t-rex
  player = createSprite(200,200,10,10);
  
}

function draw() {
  background(220);
  
  if(keyDown(UP_ARROW)) {
    player.y = player.y-10;
  }
  
  if(keyDown(LEFT_ARROW)) {
    player.x = player.x-10;
  }
  if(keyDown(DOWN_ARROW)) {
    player.y = player.y+10;
  }
  if(keyDown(RIGHT_ARROW)) {
    player.x = player.x+10;
  }
 
  
 
  drawSprites();
}
