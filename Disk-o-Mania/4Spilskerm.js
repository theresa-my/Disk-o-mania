function setupSpil()
{
  //Centrum af koordinatsystemet
  centrumX = canvaBredde/2;
  centrumY = canvaHøjde/2;
 
  //Variabler til roterende objekter
  angle = 0
  count = 0;
  aktuelAngleSpeed = 0.003;
  angleMode(radians);

  //til skiven
  skiveDiameter = 500;

  //tidstageren til farveskift
  tidsTager = 0;
  //farver til skiven
  rød = 0
  grøn = 0
  blå = 0


 
  //nye roterende objekter
  //skiven
  cirkel = new RoterendeObjekt(0,aktuelAngleSpeed ,"cirkel")
  //Firkanter der "ligger" på forhindring
  firkant1 = new RoterendeObjekt(0.0*PI,aktuelAngleSpeed ,"firkant")
  firkant2 = new RoterendeObjekt(0.5*PI,aktuelAngleSpeed ,"firkant")
  firkant3 = new RoterendeObjekt(1.0*PI,aktuelAngleSpeed ,"firkant")
  firkant4 = new RoterendeObjekt(1.5*PI,aktuelAngleSpeed ,"firkant")

  //Kør setup for spiller
  PlayerSetup();
  //Kør setup for forhindringer
  ForhindringerTimeingSetup();
}


function drawSpil()
{
  // koordinatsystem fra centrum
  translate(centrumX, centrumY);
  
  //tegn roterende objekter
 // fill(255);
  stroke(100);
  
  //Lav farve på is level + tegn cirkle
  //Timer der sikrer at vi ikke får epilipsi

  tidsTager = tidsTager + 1;
  
  push();
    if (IsTjek)
    {
      if (tidsTager > 30)
      {
        rød = random (0, 100)
        grøn = random (0, 100)
        blå = random (200, 255)
        tidsTager = 0;
      }
    }
      else 
    {
      if (tidsTager > 30)
      {
        rød = random (0, 255)
        grøn = random (0, 255)
        blå = random (0, 155)
        tidsTager = 0;
      }
    }

    //tegner og rotere skiven
    fill (rød, grøn, blå);

    cirkel.roter(0,0, skiveDiameter);
  pop();

  //tegn roterede firkanter der "Ligger" på skiven
  firkant1.roter(-2.5,10,5,200);
  firkant2.roter(-2.5,10,5,200); 
  firkant3.roter(-2.5,10,5,200); 
  firkant4.roter(-2.5,10,5,200); 

  //tegn forhindringer
  ForhindringerTimeingDraw()

  //tegn spiller
  PlayerDraw() 
}


