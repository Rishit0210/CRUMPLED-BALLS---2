class Duspin 
{
    constructor(x,y,width,height)
    {
        var option1 ={
            isStatic:true
        }
        this.image = loadImage("dustbingreen.png")
        this.body=Bodies.rectangle(x,y,width,height,option1)
        World.add(world,this.body)
        this.width=width;
        this.height=height;
        this.x=x
        this.y=y
    }

    display()
    {
        rectMode(CENTER)  

        //var pos =this.body.position;
       // rectMode(CENTER);
        //fill("white");
        //rect(pos.x, pos.y, this.width, this.height);

        //fill('gray')
        image(this.image,990,180,150,150)
    }
}