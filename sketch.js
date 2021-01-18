//Create variables here
var dog, dogImage, happyDog, happyDogImage;
var database;
var foodS, foodStock;

function preload(){
  dogImage = loadImage("dog.png");
  happyDogImage = loadImage("happydog.png");
}

function setup(){
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250, 250, 10, 10);
  dog.addImage(dogImage);
  dog.scale = 0.5;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

}


function draw() {  
  background(46, 139, 87);
  drawSprites();
}



