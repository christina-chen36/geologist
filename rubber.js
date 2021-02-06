class Rubber {
  constructor(x, y, radius) {
    var options = {
      friction: 5,
      density: 1,
    };
    this.body = Matter.Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(5);
    stroke("black");
    fill("blue");
    circle(0, 0, this.radius + 25);
    pop();
  }
}
