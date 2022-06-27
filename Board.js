class Board{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }
        this.image = loadImage("./assets/board.png");
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body);
      
    }

    display(){
        push();
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}