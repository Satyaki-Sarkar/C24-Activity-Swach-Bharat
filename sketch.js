
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var boxBottom,boxLeft,boxRight;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground();

	boxBottom=new Rectangle(1100,550,200,20);
	boxLeft=new Rectangle(1100-105,510,20,100);
	boxRight=new Rectangle(1100+105,510,20,100);

	ball=new Ball(100,510,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  boxBottom.display();
  boxLeft.display();
  boxRight.display();
  ball.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		var options={
			x:85,
			y:-85
        }
		Matter.Body.applyForce(ball.body,ball.body.position,options)
	}
}
