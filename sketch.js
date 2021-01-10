var movingrect,fixedrect;

function setup() {
  createCanvas(600,600);
  fixedrect= createSprite(300,300,50,80);
  movingrect=createSprite(300,300,50,80);
}

function draw() {
  background(0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if(movingrect.x-fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
    fixedrect.x-movingrect.x < fixedrect.width/2 + movingrect.width/2 && 
    movingrect.y-fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
    fixedrect.y-movingrect.y < fixedrect.height/2 + movingrect.height/2  ){
          movingrect.shapeColor="red";
          fixedrect.shapeColor="red";
  }
  else{
     movingrect.shapeColor="green";
     fixedrect.shapeColor="green";

  }
  


  drawSprites();
}