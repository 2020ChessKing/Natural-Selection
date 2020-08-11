class Lizard
{
    constructor(x, y, w, h)
    {
        this.lizard = createSprite(x, y, w, h);
        this.lizard.shapeColor = "red"
    }
    display()
    {
           this.lizard.velocityX = random(-7 , 7);
           this.lizard.velocityY = random(-7 , 7);

           this.lizard.collide(border1);
           this.lizard.collide(border2);
           this.lizard.collide(border3);
           this.lizard.collide(border4);
    } 
}