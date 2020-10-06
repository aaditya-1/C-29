class Box {
    constructor(x, y) {

        var opt = {
            isStatic: false
        }

        this.body = Bodies.rectangle(x, y, 20, 40, opt);

        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        rect(pos.x, pos.y, 20, 40);
    }
}