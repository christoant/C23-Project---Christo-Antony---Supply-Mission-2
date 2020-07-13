var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var red1,red2,red3;
var red1_body, red2_body, red3_body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("pictures/helicopter.png")
	packageIMG=loadImage("pictures/package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	red1 = createSprite(290,610,20,100);
	red2 = createSprite(510,610,20,100);
	red3 = createSprite(400,650,200,20);
	red1.shapeColor = color(255,0,0);
	red2.shapeColor = color(255,0,0);
	red3.shapeColor = color(255,0,0);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:.5, isStatic:true});
	World.add(world, packageBody);
	
	fill(255,0,0);
	red1_body = Bodies.rectangle(290,610,20,100, {isStatic:true});
	red2_body = Bodies.rectangle(510,610,20,100, {isStatic:true});
	red3_body = Bodies.rectangle(400,650,200,20, {isStatic:true});
	World.add(world,red1);
	World.add(world,red2);
	World.add(world,red3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y
  
  red1.x = red1_body.position.x
  red2.x = red2_body.position.x
  red3.x = red3_body.position.x

  packageSprite.collide(red1);
  packageSprite.collide(red2);
  packageSprite.collide(red3);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);   
  }
}