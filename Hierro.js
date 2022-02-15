class Hierro{
    constructor(x, y)
    {
        var options = {
            'restitution':0.8,
			'friction':3,
			'density':30
        };

        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, 40,30);

        this.width = 100;
        this.height = 70;

        World.add(world, this.body);
    }

    display(){
        var hierropos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(hierropos.x, hierropos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('darkred');
        fill('red');
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}