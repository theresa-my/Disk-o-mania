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

  //forhindringer
  forhindringer = [];
  
  //nye roterende objekter
  cirkel = new RoterendeObjekt(0,aktuelAngleSpeed ,"cirkel")
  firkant1 = new RoterendeObjekt(0.0*PI,aktuelAngleSpeed ,"firkant")
  firkant2 = new RoterendeObjekt(0.5*PI,aktuelAngleSpeed ,"firkant")
  firkant3 = new RoterendeObjekt(1.0*PI,aktuelAngleSpeed ,"firkant")
  firkant4 = new RoterendeObjekt(1.5*PI,aktuelAngleSpeed ,"firkant")

  for (let i = 0; i < 1; i++)
  {
    forhindringer.push(new RoterendeObjekt(0,aktuelAngleSpeed ,"firkant"))
  }
  PlayerSetup();
}


function drawSpil()
{
  // koordinatsystem fra centrum
  translate(centrumX, centrumY);
  
  //tegn roterende objekter
  fill(255);
  stroke(100);
  
  //Lav farve på is level + tegn cirkle
  push();
  if (level == "Is")
  {
    fill( 144, 195, 232);
  } else 
  {
    fill (0,0,0);
  }
  
  cirkel.roter(0,0,500);
  
  pop();

  //tegn roterede objekter
  firkant1.roter(-2.5,10,5,200);
  firkant2.roter(-2.5,10,5,200); 
  firkant3.roter(-2.5,10,5,200); 
  firkant4.roter(-2.5,10,5,200); 

  //tegn forhindringer
  for (let i = 0; i < forhindringer.length; i++)
  {
    forhindringer[i].roter(0, 100, 30, 60);
  }
  
  //Spiller
  PlayerDraw()


  



    
}


