var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);

  //set random speed and weight
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
   
  //assign the random speed to car's velocity
  car.velocityX = speed;
  car.shapeColor=color(255);


  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80)
 

  

}

function draw() {
  background("black");  
  text(mouseX +","+mouseY,mouseX,mouseY);
  //Detect the collision between the car and the wall.

  if(wall.x - car.x < (car.width + wall.width)/2){ 
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;

    if(deformation > 180){
        car.shapeColor = color("yellow");
        //wall.shapecolor = color("white");
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = color("green");
      // wall.shapeColor = color("white");
    }
    if(deformation < 100){
      car.shapeColor = color("red");
      // wall.shapeColor = color("white");
    }
  }
  drawSprites();
}