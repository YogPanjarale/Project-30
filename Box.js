class Box {
  constructor(x,y,width,height,color= "white") {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.color = color;
    this.visibility = 255
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var speed = this.body.speed;
    var w= this.visibility
    if(speed>2&& frameCount >60){
      push()
      this.visibility-=7
      World.remove(world,this.body)
      pop()
    }
    rectMode(CENTER);
    switch (this.color) {
      case "white":
        fill(255,255,255,w)
        break;
      case "blue":
        fill(50,50,255,w)
        break;
      case "light blue":
        fill(150,150,255,w)
        break; 
      case "pink":
        fill(255,150,150,w)
        break; 
      default:
        break;
    }
    //fill(this.color);
    rect(pos.x, pos.y, this.width, this.height);
  }
   
};
