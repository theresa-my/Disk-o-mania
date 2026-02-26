function setupSpil()
{
  centrumX = width/2;
  centrumY = height/2;
  angle = 0
  count = 0;
  
  cirkel = new RoterendeObjekt(0,0.1,"cirkel")
  firkant1 = new RoterendeObjekt(0,0.1,"firkant")
  firkant2 = new RoterendeObjekt(90,0.1,"firkant")
}

function drawSpil()
{
  // roter og tegn omkring midten; brug push/pop så translate ikke akkumuleres
  push();
  translate(centrumX, centrumY);
  fill(255);
  stroke(100);
  cirkel.roter(0,0,300);
  firkant1.roter(-2.5,10,5,100);
  firkant2.roter(-2.5,10,5,100);
  pop();
  // nulstil fyld til noget mørkt for efterfølgende tegninger
  
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
      }
    }

    firkant (x, y, width, height)
    {
      if(this.polygon == "firkant")
      {
        rect(x, y, width, height);
      }
    }
  }