function setupSpil()
{
  centrumX = width/2;
  centrumY = height/2;
  angle = 0
  count = 0;
  angleMode(radians);
  
  cirkel = new RoterendeObjekt(0,0.1,"cirkel")
  firkant1 = new RoterendeObjekt(0,0.1,"firkant")
  firkant2 = new RoterendeObjekt(90,0.1,"firkant")
  firkant3 = new RoterendeObjekt(90,0.1,"firkant")
}

function drawSpil()
{
  translate(centrumX, centrumY);
  fill(255);
  stroke(100);
  cirkel.roter(0,0,300);
  firkant1.roter(-2.5,10,5,100);
  firkant2.roter(-2.5,10,5,100); 
  firkant3.roter(0,0,100,100); 
  push();
  fill(0);
  text(firkant3.x1Reel, -300 , -200);
  circle(firkant3.x2Reel, firkant3.y2Reel, 10);
  pop();
 // text(cirkel.yReel, 300, 60);
}




class RoterendeObjekt
  {
    constructor(angle, angleSpeed, polygon)
    {
      this.angleSpeed = angleSpeed;
      this.angle = angle;
      this.polygon = polygon;
    }
    
    roter(x, y, diameterwidth,height)
    {
      push();
      this.angle += this.angleSpeed;
      rotate(radians(this.angle));
      this.cirkel(x, y, diameterwidth);
      this.firkant(x, y, diameterwidth, height);

     
      pop();
    }
    
    cirkel(x, y, diameter)
    {
      if(this.polygon == "cirkel")
      {
        circle(x, y, diameter);

        //retuner koordinater
        this.xReel = x * cos(this.angle)+y * sin(this.angle);
        this.yReel = x * sin(this.angle)+y * cos(this.angle);
      }
    }

    firkant (x, y, width, height)
    {
      if (this.polygon == "firkant")
      {
        rect(x, y, width, height);

        //retuner koordinater
        this.x1Reel = x * cos(this.angle)-y * sin(this.angle);
        this.y1Reel = x * sin(this.angle)+y * cos(this.angle);

        this.x2Reel = (x+width) * cos(this.angle)- y * sin(this.angle);
        this.y2Reel = (x+width) * sin(this.angle)+ y * cos(this.angle);

        this.x3Reel = (x+width) * cos(this.angle)+ (y+height) * sin(this.angle);
        this.y3Reel = (x+width) * sin(this.angle)+ (y+height) * cos(this.angle);

        this.x4Reel = x * cos(this.angle)+ (y+height) * sin(this.angle);
        this.y4Reel = x * sin(this.angle)+ (y+height) * cos(this.angle);  
      }
    }
  }