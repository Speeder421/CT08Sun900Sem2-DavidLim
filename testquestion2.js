function setup() {
  new Canvas(600, 400);
  background(250);
  floor=new Sprite();
  floor.x=300;
  floor.y=400;
  floor.width=600;
  floor.height=30;
  floor.collider="static";
  world.gravity.y=10;
// 
  
  }





function draw() {
    background(250);
    if(mouse.presses()){
        new Sprite(mouse.x,mouse.y,40,'dynamic');
        
  }
}
