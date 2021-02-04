var bg, bgImg ;
var balloonAnimation, balloonImg02, balloon ;
var edges ;
var bgm;

function preload(){
  bgImg = loadImage("bgImg.jpg")
  balloonAnimation = loadAnimation("Balloon01.png", "Balloon02.png", "Balloon03.png")
}

function setup() {
  createCanvas(1200,600)

  bg = createSprite(0,0,1200,600)
  bg.addImage(bgImg)
  bg.scale = 2.9;

  balloon = createSprite (150,200,100,450)
  balloon.addAnimation("balloon",balloonAnimation )
  balloon.scale = 0.35 ;
}

function draw() {
  background("black"); 
  edges = createEdgeSprites();

 // balloon.debug = true; 
  balloon.setCollider("rectangle",0,0,270,500)
  if(keyDown(UP_ARROW)){
    balloon.velocityY = balloon.velocityY-2
  } 
  else if(keyDown(DOWN_ARROW)){
    balloon.velocityY = balloon.velocityY+2
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.velocityX = balloon.velocityX+2
  }
  else if(keyDown(LEFT_ARROW)){
    balloon.velocityX = balloon.velocityX-2
  }

  balloon.collide(edges[2])
  balloon.collide(edges[3])
  balloon.collide(edges[0])
  balloon.collide(edges[1])
  drawSprites();
}