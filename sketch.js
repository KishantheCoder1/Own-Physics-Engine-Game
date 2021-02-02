//creating the constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//creating the variables
var engine, world;
var platform1;
var ball, slingshot;
var ground;
var GoalP1, GoalP2, GoalP3;

var gameState = "onSling";
var gameState = "launched";

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    // creating the ground for all the bodies
    ground = new Ground(600,800,1200,20);
    
    //creating the platform for slingshot
    platform1 = new Ground(150, 700, 300, 400);

    //creating the goal to shoot the ball in it
    GoalP1 = new Goal(1000,730,200,20);
	GoalP2 = new Goal(1100,665,20,150);
	GoalP3 = new Goal(900,665,20,150);
   
    //creating the ball that you've to shoot
    ball = new Ball(200,50,43);

    //creating the slingshot 
    slingshot = new SlingShot(ball.body,{x:200, y:500});
}

function draw(){
    background(0);
    
    Engine.update(engine);
    ground.display();
    ball.display();
    platform1.display();
    slingshot.display(); 
    GoalP1.display();
    GoalP2.display();
    GoalP3.display();  
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

