var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wallBody1,wallBody2,wallBody3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
    world = engine.world;

	rectMode(CENTER);

	wallBody1 = Bodies.rectangle(300,600,20,100, {isStatic : true});
	World.add(world,wallBody1);

	wallBody2 = Bodies.rectangle(500,600,20,100,{isStatic : true});	
	World.add(world,wallBody2);
		
	wallBody3 = Bodies.rectangle(400,650,100,20,{isStatic: true});
    World.add(world,wallBody3);
 
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);  
}

function draw() {

  Engine.update(engine)

  background(0);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;

  rectMode(CENTER);
  
  fill("red");

  rect(wallBody1.position.x,wallBody1.position.y,20,100);
  rect(wallBody2.position.x,wallBody2.position.y,20,100);
  rect(wallBody3.position.x,wallBody3.position.y + 10,200,20);

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Body.setStatic(packageBody,false);
  }
}