class Block {
  constructor(x, y, width, height) {
    var options = {
        'isStatic':false,
        'restitution':0.8,
        'friction':0.3,
        'density':0.0005
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    this.body.debug = true;
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill(100);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
