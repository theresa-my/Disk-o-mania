function setupSpil()
{
  centrumX = width/2;
  centrumY = height/2;
  angle = 0
  count = 0;
  
  cirkel = new RoterendeObjekt(0,0.1)
  firkant1 = new RoterendeObjekt(0,0.1)
  firkant2 = new RoterendeObjekt(90,0.1)
}

function drawSpil()
{
  //roter om centrum
  translate(centrumX, centrumY);

  push();
    cirkel.roter();
    circle(0,0, 300);
  pop();
  
  push();
     firkant1.roter()
     square(0, 20, 10, 0)
  pop();
  
   push();
     firkant2.roter()
     square(0, 20, 10, 0)
  pop();

}




class RoterendeObjekt
  {
    constructor(angle, angleSpeed)
    {
      this.angleSpeed = angleSpeed;
      this.angle = angle;
    }
    
    roter()
    {
      this.angle += this.angleSpeed;
      rotate(this.angle);
    }
    
    
  }