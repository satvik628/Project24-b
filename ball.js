class Ball {
    constructor(x, y, radius) {
      


      this.body = Bodies.circle(x, y, radius,{isStatic:true});
      this.radius = radius;
      
      
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      
      
      pop();
    }
  };