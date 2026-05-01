//Her er alle funktionerne der bliver brugt i spillet

//funktion der drejer spillerens globale koordinater
function DrejCirkel(x, y, vinkel)
{
    //Konveter spillerens position til roteret koordinatsystem
    //Lavet med Maple

    //xPlayerDrejet = (sin(cirkel.angle) * yPlayer + xPlayer * cos(cirkel.angle)) / (sin(cirkel.angle)**2 + cos(cirkel.angle)**2)
    let xDrejet = x * cos(vinkel) + y * sin(vinkel);

    //yPlayerDrejet = - (sin(cirkel.angle) * xPlayer - yPlayer * cos(cirkel.angle)) / (sin(cirkel.angle)**2 + cos(cirkel.angle)**2)
    let yDrejet = -x * sin(vinkel) + y * cos(vinkel);

    xPlayer = xDrejet * cos(vinkel)-yDrejet * sin(vinkel);
    yPlayer = xDrejet * sin(vinkel)+yDrejet * cos(vinkel);

    return [xDrejet, yDrejet];
}
    
//Kollisions funktion mellem cirkel og firkant
//Taget fra https://www.jeffreythompson.org/collision-detection/circle-rect.php
function Kollision(circleX, circleY, diameter, firkantX, firkantY, firkantW, firkantH)
{
      
      //Selve kollisionen
     testX = circleX;
     testY = circleY;

     if (circleX < firkantX)           
      {
        testX = firkantX;        // left edge
        koldir = "venstre";
      }
     
     else if (circleX > firkantX + firkantW)   
      {
        testX = firkantX + firkantW;     // right edge
        koldir = "højre";
      }


     if (circleY < firkantY)   
      {        
        testY = firkantY;       // top edge
        koldir = "op";    
      }
     else if (circleY > firkantY + firkantH)   
      {
        testY = firkantY + firkantH;     // bottom edge
        koldir = "nede";
      }


     distX = circleX - testX;
     distY = circleY - testY;
    
     distanc = sqrt((distX*distX) + (distY*distY) );
    
     if (distanc <= diameter/2) 
     {
      return true;
     }

     return false;
}

  

//funktion der "glider" spilleren på forhindringerne
function KollitionVinkel (vinkel, angleSpeed, radius)
{
      xPlayerHastighed = -cos(vinkel) * angleSpeed * radius;
      yPlayerHastighed = -sin(vinkel) * angleSpeed * radius;
}




//kollision mellem to cirkler
function KollisionCirkel(circle1X, circle1Y, diameter1, circle2X, circle2Y, diameter2)
{
      distX = circle1X - circle2X;
      distY = circle1Y - circle2Y;
    
      distanc = sqrt((distX*distX) + (distY*distY) );
    
      if (distanc <= diameter1/2 + diameter2/2) 
      {
       return true;
      }

      return false;
}

//knap til at skifte mellem forhindringstyper
let knapKlikket = false; // Global flag to prevent multiple triggers
 
function knap(forhindring, forhindringTjek, knapX, knapY, knapW, knapH)
{
  push();
    if (forhindringTjek == true)
    {
      fill(0,255,0);
    } else
    {
      fill(255,0,0);
    }
    
    rect(knapX, knapY, knapW, knapH);
    fill(255);
    textSize(20);
    text(forhindring, knapX + 10, knapY + 30); 
  pop();

    
  if (mouseIsPressed && !knapKlikket && mouseX > knapX && mouseX < knapX + knapW && mouseY > knapY && mouseY < knapY + knapH)
  {
    knapKlikket = true;
    return !forhindringTjek; 
  }
    
  if (!mouseIsPressed)
  {
    knapKlikket = false;
  }

  return forhindringTjek; 
}

//Hvad der sker når der er kollision mellem spiller og  firkant forhindring

function Firkantkollition(KasseX, KasseY, KasseBredde, KasseHøjde, KasseHastighedX, KasseHastighedY, SpillerX, SpillerY, Spillerradius,)
{
  if (SpillerX + Spillerradius > KasseX && SpillerX < KasseX) 
  {
    xPlayerHastighed = KasseHastighedX -2
  }


  if (SpillerX - Spillerradius < KasseX + KasseBredde && SpillerX > KasseX + KasseBredde - 5) 
  {
    xPlayerHastighed = KasseHastighedX + 2
  }


  if (SpillerY + Spillerradius > KasseY && SpillerY < KasseY)
  {
    yPlayerHastighed = KasseHastighedY - 2  
  }

  if (SpillerY - Spillerradius < KasseY + KasseHøjde && SpillerY > KasseY + KasseHøjde - 5)
  {
    yPlayerHastighed = KasseHastighedY + 2  
  }
}