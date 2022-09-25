var canvas, backgroundImage;

var questions;

var question, contestant, quiz;

var pot, potImage
var sun, sunImage
var sky, skyImage
var sprinkler, sprinklerImage
var plant, plantImage
var droplet1, droplet2, droplet3, dropletImage

function preload(){
  potImage= loadImage("pot.png")
  sunImage= loadImage("sun.png")
  plantImage= loadImage("plant.png")
  skyImage= loadImage("sky.jpeg")
  sprinklerImage= loadImage("sprinkler.png")
  dropletImage= loadImage("droplet.png")
}



function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();

  //createCanvas()

  pot=createSprite(1200,550,10,10)
  pot.addImage(potImage)
  pot.scale=0.4


  plant=createSprite(1190,500,10,10)
  plant.addImage(plantImage)
  plant.scale=1

  


  sprinkler=createSprite(1000,420,10,10)
  sprinkler.addImage(sprinklerImage)
  sprinkler.scale=0.5

  //sky=createSprite(width,height)

  sun=createSprite(1200,100,10,10)
  sun.addImage(sunImage)
  sun.scale=0.7

  droplet1=createSprite(1135,400,10,10)
  droplet1.addImage(dropletImage)
  droplet1.scale=0.1

  droplet2=createSprite(1145,448,10,10)
  droplet2.addImage(dropletImage)
  droplet2.scale=0.1

  droplet3=createSprite(1155,480,10,10)
  droplet3.addImage(dropletImage)
  droplet3.scale=0.1
}


function draw(){
  background(skyImage);

  drawSprites();

}
