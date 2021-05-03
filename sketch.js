var ground,groundImage,backgroundImage,invisibleGround;
var hero,heroImage;
var zombie,zombie1,zombie2;


function preload(){
 backgroundImage=loadImage("images/grave yard.jpg");
 heroImage=loadImage("images/runningShooter.png");
 zombie1=loadImage("images/zombie.png");
 groundImage=loadImage("images/ground.png");

 

}


function setup() {
  createCanvas(windowWidth,windowHeight);

  invisibleGround=createSprite(width/2,height-10,width,70);

  ground=createSprite(width/2,height,width,2);
  ground.addImage(groundImage);
  ground.x=width/2;
  ground.velocityX=-5;

  hero=createSprite(50,height-70,30,30);
  hero.addImage(heroImage);
  hero.scale=2;

  
}


function draw() {
 background(backgroundImage);
if(keyDown("SPACE")){
  hero.velocityY=-10;


}
hero.velocityY=hero.velocityY+0.8;
 hero.collide(invisibleGround)

 
  drawSprites();
}
function spawnZombie(){
  
}