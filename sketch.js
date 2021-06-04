var garden, gardenImage;
var cat, catImg, catImg2, catImg3,catImg4;
var mouse, mouseImg, mouseImg2, mouseImg3;

function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    mouseImg = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadAnimation( "images/cat4.png");
    mouse3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(500,500);
    //create tom and jerry sprites here
garden = createSprite(100,50);
garden.addImage("garden",gardenImage);

cat = createSprite(450,250)
cat.addAnimation("running", catImg, catImg2, catImg3);
cat.scale = 0.09;

mouse = createSprite(50,250)
mouse.addAnimation("teasing", mouseImg, mouseImg2, mouseImg3);
mouse.scale = 0.09;

}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

        cat.velocityX = 0;
        cat.velocityY = 0;
        cat.addAnimation("catSitting", catImg3);
        cat.changeAnimation("catSitting");

        mouse.addAnimation("mouseDetective", mouseImg3);
        mouse.changeAnimation("mouseDetective");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


if(keyCode === LEFT_ARROW) {

cat.velocityX = -2;
cat.velocityY = 0;

cat.addAnimation("catRunning", catImg2);
cat.changeAnimation("catRunning");

mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDealy = 25;

}

}
