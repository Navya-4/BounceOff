var plant, lion;


function setup() {
  createCanvas(800,400);
  plant = createSprite(400, 50, 50, 50);
plant.shapeColor = "green"
plant.velocityY = 5;

  lion = createSprite(400,300,100,100);
  lion.shapeColor = "yellow"
  lion.velocityY = -5;
}

function draw() {
  background(255,255,255);  

if(lion.x - plant.x < plant.width/2 + lion.width/2 && plant.x - lion.x < plant.width/2 + lion.width/2){
  plant.velocityX = -plant.velocityX;                 
  lion.velocityX = -lion.velocityX;
}
if  (lion.y - plant.y < plant.height/2 + lion.height/2 && plant.y - lion.y < plant.height/2 + plant.height/2){
  plant.velocityY = -plant.velocityY;
  lion.velocityY = -lion.velocityY;
}

  drawSprites();
}