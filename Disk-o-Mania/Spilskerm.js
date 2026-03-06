function setupSpil()
{
  centrumX = width/2;
  centrumY = height/2;
  angle = 0
  count = 0;
  angleMode(radians);
  
  //nye objekter
  cirkel = new RoterendeObjekt(0,0.1,"cirkel")
  firkant1 = new RoterendeObjekt(0.0*PI,0.01,"firkant")
  firkant2 = new RoterendeObjekt(0.5*PI,0.01,"firkant")
  firkant3 = new RoterendeObjekt(1.0*PI,0.01,"firkant")
  firkant4 = new RoterendeObjekt(1.5*PI,0.01,"firkant")
}


function drawSpil()
{
  // koordinatsystem fra centrum
  translate(centrumX, centrumY);
  
  //tegn objekter
  fill(255);
  stroke(100);
  cirkel.roter(0,0,300);
  firkant1.roter(-2.5,10,5,100);
  firkant2.roter(-2.5,10,5,100); 
  firkant3.roter(-2.5,10,5,100); 
  firkant4.roter(-2.5,10,5,100); 
  
}


