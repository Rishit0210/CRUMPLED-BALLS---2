
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1200, 350);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  Engine.run(engine);
  
   paperObject=new Paper();

   ground=new Ground(600,340,1200,20);
   
   d1=new Duspin(1050,320,200,20);
   d2=new Duspin(960,230,20,140);
   d3=new Duspin(1140,230,20,140);
   
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(180);

  ground.display();
  paperObject.display();
  d1.display();
  d2.display();
  d3.display();
  

  drawSprites();
 
}

function keyPressed(){

  if (keyCode === UP_ARROW){
    console.log(paperObject.body.position.x);
    
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1280,y:-800});
    
  }
}



