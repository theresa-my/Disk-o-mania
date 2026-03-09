function setupSpil()
{
  //Centrum af koordinatsystemet
  centrumX = width/2;
  centrumY = height/2;
 
  //Variabler til roterende objekter
  angle = 0
  count = 0;
  aktuelAngleSpeed = 0.01;
  angleMode(radians);
  acc = 0;
  
  //nye roterende objekter
  cirkel = new RoterendeObjekt(0,aktuelAngleSpeed ,"cirkel")
  firkant1 = new RoterendeObjekt(0.0*PI,aktuelAngleSpeed ,"firkant")
  firkant2 = new RoterendeObjekt(0.5*PI,aktuelAngleSpeed ,"firkant")
  firkant3 = new RoterendeObjekt(1.0*PI,aktuelAngleSpeed ,"firkant")
  firkant4 = new RoterendeObjekt(1.5*PI,aktuelAngleSpeed ,"firkant")

  PlayerSetup();
}


function drawSpil()
{
  // koordinatsystem fra centrum
  translate(centrumX, centrumY);
  
  //tegn roterende objekter
  fill(255);
  stroke(100);

  cirkel.roter(0,0,500);
  firkant1.roter(-2.5,10,5,200);
  firkant2.roter(-2.5,10,5,200); 
  firkant3.roter(-2.5,10,5,200); 
  firkant4.roter(-2.5,10,5,200); 
  

  //Spiller
  PlayerDraw()

  //Udregn vinkelhastighed og radius for spillerens position
  vinkelHastighed = 2*PI/(1/(aktuelAngleSpeed * 60))*0.02
  radius = Math.sqrt(xPlayer**2 + yPlayer**2)
  //Is eller ej
  
  if (level == "Is")
  {
    acc = vinkelHastighed ** 2 * radius;


    if (xPlayer > 0)
    {
      xPlayer += acc * cos(atan(yPlayer/xPlayer));
      yPlayer += acc * sin(atan(yPlayer/xPlayer));
    } else
    {
    xPlayer -= acc * cos(atan(yPlayer/xPlayer));
    yPlayer -= acc * sin(atan(yPlayer/xPlayer));
    }
  }
    
}


