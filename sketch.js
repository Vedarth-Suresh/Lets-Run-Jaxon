//variables
var boi, boi_running;
var path, pathImage;
var eges, right_wall, left_wall;



function preload() 
{


  //loading animations and images
  boi_running = loadAnimation("Runner-1.png", "Runner-2.png", "Runner-1.png");
  pathImage = loadImage("path.png");


}

function setup() 
{

  //border
  createCanvas(400, 400);

  //create a trex sprite

  
  //create a path sprite
  path = createSprite(200,380,1000,20);
  path.addImage("path",pathImage);
  path.y = path.height /2;
  path.velocityY = 4;

  boi = createSprite(150,200,40,100);
  boi.addAnimation("running", boi_running);
  boi.scale = 0.05;

  right_wall = createSprite(420,0,150,1000);
  right_wall.visible = false;
  left_wall = createSprite(-20,0,150,1000);
  left_wall.visible = false;
}



function draw() 
{

  //backpath color
  background("green");

  //movement
  boi.x = mouseX;
 

  //infinite path loop
  if (path.y > 600) 
  {
    path.y = 150
  }

  //making the boi collide with the sides
   eges = createEdgeSprites();
    
   boi.collide(left_wall);
   boi.collide(right_wall);
  drawSprites();


}
