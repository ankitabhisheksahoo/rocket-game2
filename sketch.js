var spaceship,spaceshipImg;
var spaceImg,space;
var asteroid1,asteroid1Img,asteroids1Group;
var blackhole,blackholeImg,blackholesGroup;
var gameState = "play"

function preload(){
spaceshipImg=loadImage("spaceship.png");
spaceImg=loadImage("space.jpg");
asteroid1Img=loadImage("asteroid1.png");
blackholeImg=loadImage("blackhole.png");
}

function setup() {
createCanvas(600, 600);
space = createSprite(300,300);
space.addImage("space",spaceImg);
space.scale=0.2
space.velocityY=1;
spaceship = createSprite(300,300);
spaceship.addImage("spaceship",spaceshipImg);
spaceship.scale=0.1

asteroids1Group=new Group();
blackholesGroup=new Group();

}

function draw(){
background(0);
if(gameState==="play"){
if(space.y > 400){
space.y = 300
}
 if(keyDown("right")){
spaceship.velocityX=1; 
}
if(keyDown("left")){
spaceship.velocityX=-1; 
if(asteroids1Group.isTouching(spaceship)){
 spaceship.destroy();
 space.destroy();
 asteroids1Group.destroyEach();
 blackholesGroup.destroyEach();
 gameState="end";
}

 }
}
if(gameState==="end"){
textSize(40);
text("GAME OVER",200,300);
}
spawnAsteroid1();

drawSprites();
}
function spawnAsteroid1(){
if(frameCount%250===0){
asteroid1=createSprite(200,100)
asteroid1.addImage(asteroid1Img);
asteroid1.scale=0.05;
asteroid1.velocityY=1;
 asteroid1.lifetime=625;
 asteroid1.x=Math.round(random(100,500))
asteroids1Group.add(asteroid1);

blackhole=createSprite(100,50);
blackhole.addImage(blackholeImg);
blackhole.scale=0.05;
blackhole.velocityY=1;
 blackhole.lifetime=625;
 blackhole.x=Math.round(random(100,500))
blackholesGroup.add(blackhole);
}
}





