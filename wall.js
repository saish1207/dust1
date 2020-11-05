class wall{
    constructor(x,y,width,height){
 var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
       
        World.add(world,this.body);
        this.Width = width
        this.Height = height


    }
    display(){
        var  pos = this.body.position;
        rectMode(CENTER);
       fill("white");
        rect(this.image,pos.x,pos.y,this.Width,this.Height);
        
      }
}