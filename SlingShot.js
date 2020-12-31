class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            isStatic:true,
            setStatic:true,
            //setStatic:true,
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.1,
            length: 50
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
      fly() {
      this.body.bodyA = null  ;
      }
    display(){
        if(this.body.bodyA)
        {
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            fill(100,100,100);
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}