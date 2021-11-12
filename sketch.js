var canvas;
var block1,block4;
var ball, edges;
var music;
var music1;

function preload()
{
    // load sound here
    music = loadSound("hey.mpeg");
    music1 = loadSound("frie.mp3");
    image = loadImage("riya.jpg");
}
function setup()
{
    canvas = createCanvas(850,600);
  //create blocks
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block4 = createSprite(730,580,200,30);
    block4.shapeColor = "green";
  //created ball
    ball = createSprite(425,100,60,60);
    //ball.shapeColor = rgb(255,255,255);
    ball.shapeColor = ("black")
}
function draw() 
{
    background(image)
    edges=createEdgeSprites();

    stroke("black");
    fill("BLACK");
    textSize(30);
    text("RIYA TOUCH THE BOX ONCE ONLY:)",8,150);
    textSize(40);
    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
      ball.shapeColor = "blue";
        music.play();
        stroke("blue");
        fill("blue");
        textSize(50);
        text("ENJOY RIYA",225,250);
        textSize(100);
        
    }

   if(block4.isTouching(ball) && ball.bounceOff(block4)) {
       ball.shapeColor = "green";
       stroke("green");
       fill("green");
       textSize(50);
       text("SMILE RIYA",225,250);
       textSize(100);
       music1.play();
   }

   if (keyDown(UP_ARROW)) {
    ball.velocityX =0;
    ball.velocityY =-4;
}

    if (keyDown(DOWN_ARROW)) {
  ball.velocityX =0;
  ball.velocityY =4;
}

  if (keyDown(LEFT_ARROW)) {
  ball.velocityX =-4;
  ball.velocityY =0;
}

  if (keyDown(RIGHT_ARROW)) {
  ball.velocityX =4;
  ball.velocityY =0;
}

    drawSprites();
}
