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

  for (let i = 0; i < 4; i++)
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

  if (level == "Is")
  {
  pop();
  fill( 144, 195, 232);
  cirkel.roter(0,0,500);
  pop();
  }
  firkant1.roter(-2.5,10,5,200);
  firkant2.roter(-2.5,10,5,200); 
  firkant3.roter(-2.5,10,5,200); 
  firkant4.roter(-2.5,10,5,200); 

  for (let i = 0; i < 4; i++)
  {
    forhindringer[i].roter(0, 100, 30, 60);
  }
  
  //Spiller
  PlayerDraw()


  



    
}


