
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3,ground,paper,dust,dustimg;

function preload()
{
	dustimg = loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(800, 740);

	dust=createSprite(720, 680, 80,10);
	dust.addImage(dustimg)
	dust.scale=0.3



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	wall1 = new wall(760,700,20,80);
	wall2 = new wall(630,700,20,80);
	wall3 = new wall(720,730,150,10);
	paper = new Paper(200,100,50);
  ground = new Ground(600,height,1200,20);

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  

  wall1.display();
  wall2.display();
  wall3.display();
  paper.display();
  ground.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Body.applyForce(paper.body,paper.body.position,{x:600,y:-600})
	  
	 }
   }



