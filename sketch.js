var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody,engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();
	var object_options={
		restitution:1.0
   }
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;
   
	/*var ball_optio={
		isStatic:true,
		restitution:1.5
	  }*/
	  var ball_optio={
		   isStatic:true, restitution:1.0 } 
	  starBody = Bodies.circle(650 , 100 , 5 ,ball_optio); 
	  World.add(world, starBody);
	
	/*starBody = Bodies.circle(650 , 100 , 5 ,ball_optio);
	World.add(world, starBody);*/
	


	Engine.run(engine);
   console.log(starBody)
}


function draw() {
  background(bgImg);
  Engine.update(engine);
  star.x=starBody.position.x;
  star.y=starBody.position.y;

  

  circle(starBody.position.x,starBody.position.y,5)
  keyPressed();

  

  drawSprites();

}

function keyPressed() {
	//write code here

	if(keyCode===LEFT_ARROW){ 
	fairy.x=fairy.x-2
	
} 
if(keyCode===RIGHT_ARROW){
	fairy.x=fairy.x+2
	}

if(keyCode===DOWN_ARROW){

	 starBody.ball_optio={isStatic:false,restitution:1.0};
	
  }


}

