//Create variables here
var dog,dogSprite

var dogHappy, database, foodS, foodStock

function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png")
dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()
dogSprite = createSprite(400,350,20, 20);

dogSprite.addImage(dog)

dogSprite.scale=0.1;

foodStock=database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
background(100,20,50);


text("Press up ARROW to FEED the Dog", 200, 100);
text("Food Left:"+foodS,100,100)
textSize()
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dogSprite.addImage(dogHappy);

}
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

if(x<=0){
  x=0
}else{
  x=x-1;
}

  database.ref('/').update({

Food:x
})
}




