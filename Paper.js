class Paper{
    constructor(x, y, h, angle) {
        var options= {
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, h,angle, options);
        this.h=h;
        this.image = loadImage("Projec 25/paper.png");
        Matter . Body .setAngle(this.body,angle);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.height,this.angle);
        pop();
      }

      function keyPressed(){
        if (keyCode === UP_ARROW) {
          Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
        }
       }
      }