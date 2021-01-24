class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    if(this.body.position.x>200 && this.body.velocity.x>10){

    var pos = [this.body.position.x,this.body.position.y];
    this.trajectory.push(pos)
    }

    
    for(var r = 0;r<this.trajectory.length;r++){

    

    image(this.smoke,this.trajectory[r][0],this.trajectory[r][1])
    }

    super.display();
  }
}
