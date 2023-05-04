
var sea, ship;
var seaImg, shipImg1;

function preload(){
  
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
}

function setup(){
  createCanvas(400,400);
  background("blue");
  
  sea = createSprite(400,200)
  sea.addImage(seaImg);

  ship = createSprite(130, 290, 30, 30);
  ship.addAnimation("movingship",shipImg1);
  ship.scale = 0.25

}

function draw() {
  background(0);
    drawSprites();

}
