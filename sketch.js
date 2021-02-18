const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball1,ball2,platform;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    //create ground objects
    ground = new Ground(200,380,400,20)
    platform = new Ground(100,300,30,120);
    platform2= new Ground(300,200,100,30)
    platform3 = new Ground(100,100,100,30)
    //create ball objects
    ball1= new Ball(200,100,20)
    ball2 = new Ball(270,50,10)
    ball3= new Ball(120,100,20)
    ball4 = new Ball(100,50,10)
  
}

function draw(){
    background(0);
    Engine.update(engine);
    // to display the objects
    ground.display()
  
   ball1.display();
   ball2.display()
   ball3.display();
   ball4.display();
   platform.display();
   platform2.display();
   platform3.display();
}