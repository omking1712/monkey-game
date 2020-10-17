
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage,obstacle;
var FoodGroup, obstacleGroup;
var score,ground,survivalTime;

function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(550,400);
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1

ground = createSprite(400,350,900,10);
ground.velocityX= -4;
ground.x = ground.width /2;
console.log(ground.x);
  
  
obstacle= new Group();
banana= new Group();
  
   obstacleGroup = createGroup();
  bananaGroup= createGroup();
  
  
  monkey.setCollider("circle",0,0,270);
  monkey.debug=false
  
  score = 0;
}


function draw() {
background("white");

if (ground.x < 100){
      ground.x = ground.width/2;
    } 
  
  if(keyDown("space")&& monkey.y >= 300) {
    monkey.velocityY = -14;
    }
  
  if(obstacleGroup.isTouching(monkey)){
    
  obstacleGroup.setVelocityXEach(0);
   bananaGroup.setVelocityXEach(0);
  bananaGroup.setVelocityYEach(0);
  monkey.velocityY = 0;
  monkey.velocityX = 0;
  textSize(16);
  text("GAME OVER!",200,200);
  ground.velocityX = 0;
  
  
 
  }
  
  if(monkey.isTouching(banana)){
    score = score+1
   banana.destroy(); 
    
  }
 
 monkey.velocityY = monkey.velocityY + 0.8
 monkey.collide(ground);
  textSize(17)
  text(score,500,30) 
  
  spawnbanana();
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  
  if(frameCount%80===0)  
  {  
    
  obstacle=createSprite(80,315,40,10);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.y=Math.round(random(325,325));
    obstacle.x=Math.round(random(500,500));
    obstacle.scale=0.1
  obstacle.velocityX=-5;
   obstacleGroup.add(obstacle);
    
  }
}

function spawnbanana(){
  
  if(frameCount%100===0)  
  {  
    
  banana=createSprite(80,315,40,10);
    banana.addImage("banana",bananaImage);
    banana.y=Math.round(random(0,0));
    banana.x=Math.round(random(200,200));
    banana.scale=0.1
  banana.velocityY=5;
  banana.velocityX=-2
  bananaGroup.add(banana);
    
  }
}



