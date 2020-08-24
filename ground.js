class Ground{
    constructor(){
        var groundOptions={
            isStatic: true
        }

        this.body=Bodies.rectangle(675,580,1350,20,groundOptions);
        this.width=1350;
        this.height=20;

        World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill("Brown");
    rect(pos.x,pos.y,this.width,this.height);
    }
}