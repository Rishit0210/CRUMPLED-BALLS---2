class Paper {
    constructor() {
      var options = {
          isStatic:false,
          restitution: 0.3,
          friction:0.5,
          density:1.2,
      }
      this.image = loadImage("paper.png")
      this.body = Bodies.circle(100,290,70,options);
      World.add(world, this.body);
      
    }
    display(){
     
      //fill('purple')
      image(this.image,this.body.position.x,this.body.position.y,70,70)
      //ellipseMode(RADIUS)
      //ellipse(this.body.position.x,this.body.position.y,20,20)
    }
  };