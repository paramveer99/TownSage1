const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bird, slingShot;
var ground;



function setup(){
  var canvas = createCanvas(1400,800);
  engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,height,1600,20);
    roof1 = new Ground(500,600,400,20);
    roof2 = new Ground(1000,350,400,20);
    block1 = new Block(350,500,80,80);
    block2 = new Block(450,551,80,80);
    block3 = new Block(550,520,80,80);
    block4 = new Block(600,550,80,80);
    block5 = new Block(850,200,80,80);
    block6 = new Block(930,200,80,80);
    block7 = new Block(1010,200,80,80);
    block8 = new Block(1090,200,80,80);
    block9 = new Block(1000,100,80,80);
    block10 = new Block(930,100,80,80);
  

    bird = new Bird(100,100);
  slingshot = new SlingShot(bird.body,{x:200, y:100});
  
  
}











function draw(){
  background(255);
  Engine.update(engine);
  
  strokeWeight(4);
  ground1.display();
  bird.display();
  roof1.display();
  roof2.display();
  block1.display();
  fill("yellow");
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
 
  slingshot.display();
  
}



function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY });
}

function mouseReleased(){
  slingshot.fly();
}