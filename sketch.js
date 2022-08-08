
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao;
var parede1;
var parede2;
var bola;

function preload(){
	


}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    chao = Bodies.rectangle(400,690,800,20, {isStatic: true});
	World.add (world, chao);

	parede1 = Bodies.rectangle(600,650,10,100, {isStatic: true});
	World.add (world, parede1);

	parede2 = Bodies.rectangle(700,650,10,100, {isStatic: true});
	World.add (world, parede2);

	bola = Bodies.circle(100,650,15);
	World.add (world, bola);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  drawSprites();

  noStroke();

  fill("purple");
  rect(parede1.position.x,parede1.position.y,10,100);
  rect(parede2.position.x,parede2.position.y,10,100);
  rect(chao.position.x,chao.position.y,800,20);

  fill ("white");
  ellipse(bola.position.x,bola.position.y,15);
  
}

function keyPressed() {

	if (keyCode === 32) {

		Matter.Body.applyForce(bola,{x: 0, y: 0},{x: 0.02,y: 0.02}); 


	}	
	
	
}
