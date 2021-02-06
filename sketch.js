const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;
var sand, sand2, sand3, sand4, sand5;
var iron;

function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.

  hammer = new Hammer(200, 200, 100, 30);
  plane = new Plane(width / 2, height, width, 20);
  stone = new Stone(100, 600, 50, 50);
  rubber = new Rubber(300, 600, 30);
  sand = new Sand(400, 600, 10);
  sand2 = new Sand(400, 600, 10);
  sand3 = new Sand(400, 600, 10);
  sand4 = new Sand(400, 600, 10);
  sand5 = new Sand(400, 600, 10);
  iron = new Iron(700, 600, 50, 70);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("grey");
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  sand.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  iron.display();

  drawSprites();
}
