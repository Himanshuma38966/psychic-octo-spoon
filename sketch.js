var man,manimg;
var ground;
var drops








function preload(){
 manimg=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
}




function setup() {
  createCanvas(400, 400);
  ground=createSprite(400,350,1000,10)
  
  man=createSprite(100,300,900,20)
  man.addAnimation("moving",manimg);
  man.scale=0.1;
  
  
}

function draw() {
  background(0);
  spawndrops()
   drawSprites()
}
function spawndrops (){
if (World.frameCount%160===0){
drops=createSprite(500,320,300,2);
drops.setlifetime=150;
drops.velocityX=-3                      

drops.scale=0.50
}   
}  
