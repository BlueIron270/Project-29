const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var stand1;
var stand2;
var block8;
var polygon;
var hexImage;
var slingshot;

function setup() {
  createCanvas(1600,800);
  stroke(255);
  
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(800, 790, 1600, 20);  
  stand1 = new Ground(600, 700, 400, 20);  
  stand2 = new Ground(1200, 400, 300, 20);  
  
  //level one
  block1 = new Block(500, 575, 30, 40);
  block2 = new Block(530, 575, 30, 40);
  block3 = new Block(560, 575, 30, 40);
  block4 = new Block(590, 575, 30, 40);
  block5 = new Block(620, 575, 30, 40);
  block6 = new Block(650, 575, 30, 40);
  block7 = new Block(680, 575, 30, 40);
  //level two
  block8 = new Block(530, 535, 30, 40);
  block9 = new Block(560, 535, 30, 40);
  block10 = new Block(590, 535, 30, 40);
  block11 = new Block(620, 535, 30, 40);
  block12 = new Block(650, 535, 30, 40);
  //level three
  block13 = new Block(560, 495, 30, 40);
  block14 = new Block(590, 495, 30, 40);
  block15 = new Block(620, 495, 30, 40);
  //top
  block16 = new Block(590, 455, 30, 40);

  //level one
  block17 = new Block(1140, 355, 30, 40);
  block18 = new Block(1170, 355, 30, 40);
  block19 = new Block(1200, 355, 30, 40);
  block20 = new Block(1230, 355, 30, 40);
  block21 = new Block(1260, 355, 30, 40);
  //level two
  block22 = new Block(1170, 315, 30, 40);
  block23 = new Block(1200, 315, 30, 40);
  block24 = new Block(1230, 315, 30, 40);
  //top
  block25 = new Block(1200, 275, 30, 40);
  

  polygon = Bodies.circle(150, 400, 50);
  hexImage = loadImage("polygon.png");

  World.add(world, polygon);

  slingshot = new SlingShot(polygon, {x:150, y:400})
}

function draw() {
  background(0);  

 Engine.update(engine);

 ground.display();
 stand1.display();
 stand2.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 block23.display();
 block24.display();
 block25.display();

 imageMode(CENTER);
 image(hexImage, polygon.position.x, polygon.position.y, 100, 100);
 slingshot.display();


 drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
  console.log(polygon.position.x);
  console.log(polygon.position.y);
}


function mouseReleased(){
    slingshot.fly();
}