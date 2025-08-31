function setup() {
  new Canvas(600, 400);
  background(250);
  world.gravity.y=10;


}

function draw() {
    background(250);
    if(mouse.presses()){
    ball=new Sprite(mouse.x,mouse.y,40,'dynamic');
    
   
  }

  // write your codes here

  }
