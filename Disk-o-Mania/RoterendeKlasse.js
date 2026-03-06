

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
      rotate(this.angle);
      this.cirkel(x, y, diameterwidth);
      this.firkant(x, y, diameterwidth, height);
      pop();
      this.ReturnerKoordinater(x, y);
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

      }
    }

    ReturnerKoordinater(x, y)
    {
     
      if (this.polygon == "firkant")
      {   
        //retuner koordinater
        this.x1Reel = x * cos(this.angle)-y * sin(this.angle);
        this.y1Reel = x * sin(this.angle)+y * cos(this.angle);

        this.x2Reel = (x+width) * cos(this.angle)- y * sin(this.angle);
        this.y2Reel = (x+width) * sin(this.angle)+ y * cos(this.angle);

        this.x3Reel = (x+width) * cos(this.angle)+ (y+height) * sin(this.angle);
        this.y3Reel = (x+width) * sin(this.angle)+ (y+height) * cos(this.angle);

        this.x4Reel = x * cos(this.angle)+ (y+height) * sin(this.angle);
        this.y4Reel = x * sin(this.angle)+ (y+height) * cos(this.angle);  
      
     
        circle(this.x1Reel, this.y1Reel, 10);
      }
    }
  }