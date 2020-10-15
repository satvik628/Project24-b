
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	boxSide1=new Box(800,height-50,300,20);
	  
	  boxSide2=new Box(960,height-100,20,120);
	 
	  boxSide3=new Box(640,height-100,20,120);

	
	
	

	ballBody = Bodies.circle(50 , 500 , 25 , {restitution:0.3});
	World.add(world, ballBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	console.log(ground)
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
 background("black");

 
 ellipseMode(RADIUS);
      fill("violet");
      ellipse(ballBody.position.x,ballBody.position.y, 20,20);



 rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x,ground.position.y,1000,20)
  
  
 keyPressed();

  
  
 
 boxSide1.display() ;
 boxSide2.display() ;
 boxSide3.display() ;
  
 
}

function keyPressed(){
 if(keyCode===UP_ARROW)
 
 Matter.Body.applyForce(ballBody.body,ballBody.body.position,{x:85,y:-85})

}

