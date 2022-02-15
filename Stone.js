class Stone{
    constructor(x, y)
    {
        var options = {
            'restitution':0.8,
			'friction':0.9,
			'density':12
        };

        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, 40,30);

        this.width = 150;
        this.height = 40;

        World.add(world, this.body);
    }

    display(){
        var stonepos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(stonepos.x, stonepos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('black');
        fill('white');
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}