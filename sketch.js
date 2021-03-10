const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var myengine,myworld;
var ground;
var ball2;
var ball1;

function setup(){
  var canvas=createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;




  var ground_options ={
    isStatic : true 
  }
  ground = Bodies.rectangle (200,390,200,20,ground_options)
  World.add(myworld,ground)


  var ball1_options ={
    restitution : 1
  }


  ball1=Bodies.circle(150,50,20,ball1_options)
  World.add(myworld,ball1)

  var ball2_options ={
    restitution : 1
  }

  
  ball2 = Bodies.circle (250,50,20,ball2_options)
  World.add(myworld,ball2)






  

}
function draw()
{
  background(0);
  Engine.update(myengine);

 ellipseMode(RADIUS);
 ellipse(ball2.position.x,ball2.position.y,20,20)

 ellipseMode(RADIUS);
 ellipse(ball1.position.x,ball1.position.y,20,20)




 
 rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)




  
}
