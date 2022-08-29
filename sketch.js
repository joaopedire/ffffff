
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle1 = 60;
var angle2 = 60;
var angle3 = 60;

var plane

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);
	
  var ground_options ={
    isStatic: true
  };

  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  
  var rotator_options ={
    isStatic: true
  };


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
 plane = Bodies.rectangle(200,390,400,20,ground_options);
 World.add(world, plane);

 ground1 = Bodies.rectangle(325,230,220,15,ground_options);
 World.add(world, ground1);

 ground2 = Bodies.rectangle(70,230,200,15,ground_options);
 World.add(world, ground2);

 ball1 = Bodies.circle(200,50,20,ball_options);
 World.add(world, ball1);

 ball2 = Bodies.circle(150,50,20,ball_options);
 World.add(world, ball2);

 ball3 = Bodies.circle(250,50,20,ball_options);
 World.add(world, ball3);

 rotator = Bodies.rectangle(200,100,20,20,rotator_options);
 World.add(world, rotator);

 rotator2 = Bodies.rectangle(200,100,20,20,rotator_options);
 World.add(world, rotator2);

 rotator3 = Bodies.rectangle(200,100,20,20,rotator_options);
 World.add(world, rotator3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);


  
  rect(plane.position.x,plane.position.y,400,20);
  rect(ground1.position.x,ground1.position.y,100,15);
  rect(ground2.position.x,ground2.position.y,100,15);
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
 



  Matter.Body.rotate(rotator, angle1);
  push();
  translate(rotator.position.x,rotator.position.y);
  rotate(angle1);
  rect(0,0,100,10);
  pop();
  angle1+=10;

  Matter.Body.rotate(rotator2, angle1);
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,100,10);
  pop();
  angle2+=5;

  Matter.Body.rotate(rotator3, angle1);
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,100,10);
  pop();
  angle3+=7;



  drawSprites();
 
}




