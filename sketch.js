var car,wall;
var speed,weight;




function setup() {
  createCanvas(1400,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1300, 200, 40, height/2);
}

function draw() {
  background("black");  

  textSize(20);
  text("Deformation = 0.5 * Weight *Speed*Speed/22500",100,350);
  text("If the colour is green then it's good.",100,50);
  text("If the colour is yellow then it's average.",100,80);
  text("If the colour is red then it's lethal.",100,110);


  car.velocityX = speed;

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed *speed/22509;
    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }

    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }
  }

  

  drawSprites();
}