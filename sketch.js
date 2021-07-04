var background,bow,green_balloon,red_balloon,pink_balloon,
    blue_balloon;
var backgroundImage,bowImage,green_balloonImage,
    red_balloonImage,pink_balloonImage,blue_balloonImage;
var arrow,arrowImage;

function preload(){
 //load your images here 
backgroundImage=loadImage("background0.png") ; bowImage=loadImage("bow0.png");
green_balloonImage=loadImage("green_balloon0.png");
red_balloonImage=loadImage("red_balloon0.png"); pink_balloonImage=loadImage("pink_balloon0.png");
blue_balloonImage=loadImage("blue_balloon0.png");
arrowImage=loadImage("arrow0.png") ; 
}

function setup() {
createCanvas(600, 600);
background =createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale=2.5
  
  bow=createSprite(360,100,5,10);
  bow.addImage(bowImage);

  for (var y = 115; y < 390; y=y+60) {
 green_balloon=createSprite(50,y,10,10);
green_balloon.addImage(green_balloonImage);
 green_balloon.scale=0.1;  
   }

 for (var y = 130; y < 350; y=y+60) {
 blue_balloon=createSprite(100,y,20,20); 
blue_balloon.addImage(blue_balloonImage);
   blue_balloon.scale=0.1;
 }
 
for (var y = 150; y < 310; y=y+60) {
 pink_balloon=createSprite(150,y,60,60); 
pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale=0.9;
}


  
}

function draw() {
 background.velocityX=-3;
 if (background.x < 0){
      background.x = background.width/2;
    }
  
 bow.y = World.mouseY; 
  
  //add code here
 //release Arrow when space key is pressed

   
  //play sound when arrow is released
  
  
    
    
 
  
 createArrow();
drawSprites();
}
//creating arrows for bow
function createArrow() {
  if(keyDown("space")){
  arrow=createSprite(360,300,5,10);
  arrow.addImage(arrowImage);
  arrow.velocityX=-6;
  arrow.scale=0.3;
   arrow.y=bow.y;
  arrow.x=bow.x;
   
   return arrow;
  }
}
