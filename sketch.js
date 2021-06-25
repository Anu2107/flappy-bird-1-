const Engine = Matter.Engine; 
const Bodies = Matter.Bodies; 
const World = Matter.World; 

var bg, bgSprite;  
var engine, world; 
var bird; 

function preload(){
  bg = loadImage("background.jpg"); 
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  engine = Engine.create(); 
  world = engine.world; 

  bgSprite = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight); 
  bgSprite.velocityX = -2; 
  bgSprite.addImage(bg); 

  bird = new flappy(100, 120); 

}

function draw() {
  background(0); 
  Engine.update(engine); 

  if(bgSprite.x < 400){
     bgSprite.x = bgSprite.width/2; 
  }

   drawSprites();

  bird.display(); 
}
