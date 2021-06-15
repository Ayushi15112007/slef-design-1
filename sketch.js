var sonic1, sonic2, sonic3, sonic4, sonic5;
var sonic1img, sonic2img, sonic3img, sonic4img, sonic5img;
var ground;
var obstacle;
var back;
var invisibleground;
var path;
var bush;
var obsctaclegrp

function preload(){
  path = loadImage("back.png")
  sonic1img= loadAnimation("sonic1.png", "sonic2.png", "sonic3.png", "sonic4.png", "sonic5.png")
   bush = loadImage("bushes.png")

}



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  back = createSprite(width/2,200);
  back.addImage("p",path)
  back.x = back.width/2
  back.velocityX = -4;
  sonic1 = createSprite(100,360,20,20);



  invisibleground = createSprite(100,355,80,10);
  invisibleground.visible = false;

  sonic1.addAnimation("S1",sonic1img);

  obstaclegrp = new Group();

  


}

function draw() {
  //background("back");  

  //jump for sonic
  if(keyDown("space")){
    sonic1.velocityY = -10
  }

  sonic1.velocityX

  if(back.x < 0){
    back.x = back.width/2
  }

  spawnobstacles()

  drawSprites();
  
}

function spawnobstacles(){
  if(frameCount % 70 === 0){
    obstacle = createSprite(400,370,10,10);
    obstacle.velocityX = -5

  obstacle.addImage("O",bush);
  obstacle.scale = 0.4;
  obstaclegrp.add(obstacle)

  obstacle.setLifetime = 200
  }
}




