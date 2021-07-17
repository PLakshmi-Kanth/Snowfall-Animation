const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var backgroundImg;
var snowman,snowmanImg;
var snowImg;
function preload(){

  backgroundImg=loadImage("snow2.jpg");
  snowmanImg=loadImage("snowman.png");
  snowImg=loadImage("snow4")
}



function setup() {
  createCanvas(1380,650);
  engine=Engine.create();
  world=Engine.world;
  Engine.run(engine);
  snowman= createSprite(1000, 580, 50, 50);
  snowman.addImage("snowman",snowmanImg);
  snowman.scale=0.2;
}

function draw() {
  background(backgroundImg);

if(keyDown(LEFT_ARROW)){
  snowman.x=snowman.x-1;
  }
if(keyDown (RIGHT_ARROW)){
  snowman.x=snowman.x+1;
}

  drawSprites();

  Engine.update(engine);
}