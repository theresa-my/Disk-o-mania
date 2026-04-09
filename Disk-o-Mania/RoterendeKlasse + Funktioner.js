

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
      this.x = x;
      this.y = y;
      this.diameterwidth = diameterwidth;
      this.height = height;
      
      push();
        

        //roter koordinatsystem med vinkel og hastighed
        this.angle += this.angleSpeed;
        rotate(this.angle);

        //tegn objekt afhængigt af polygon type
        this.cirkel(x, y, diameterwidth);
        this.firkant(x, y, diameterwidth, height);
      pop();
      
      //retuner de globale koordinater
      this.ReturnerKoordinater(x, y);
    }

    cirkel(x, y, diameter)
    {
      //tegner cirkel, hvis polygon type er cirkel
      if(this.polygon == "cirkel")
      {
        circle(x, y, diameter);
      }
    }

    firkant (x, y, width, height)
    {
      //tegner firkant, hvis polygon type er firkant
      if (this.polygon == "firkant")
      {
        rect(x, y, width, height);
      }
    }

    //metode der retunerer de globale koordinater
    ReturnerKoordinater(x, y)
    {
     
      if (this.polygon == "firkant")
      {   
        //retuner koordinater de globale koordinater for hvert hjørne i firkanten
        this.x1Reel = x * cos(this.angle)-y * sin(this.angle);
        this.y1Reel = x * sin(this.angle)+y * cos(this.angle);

        this.x2Reel = (x+width) * cos(this.angle)- y * sin(this.angle);
        this.y2Reel = (x+width) * sin(this.angle)+ y * cos(this.angle);

        this.x3Reel = (x+width) * cos(this.angle)+ (y+height) * sin(this.angle);
        this.y3Reel = (x+width) * sin(this.angle)+ (y+height) * cos(this.angle);

        this.x4Reel = x * cos(this.angle)+ (y+height) * sin(this.angle);
        this.y4Reel = x * sin(this.angle)+ (y+height) * cos(this.angle);  
      
      }

      if (this.polygon == "cirkel")
      {
        //retuner koordinater de globale koordinater for cirklens centrum
        this.xReel = x * cos(this.angle)-y * sin(this.angle);
        this.yReel = x * sin(this.angle)+y * cos(this.angle);
      }
    }
  }



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
       fill(255,0,0);
       text("Game Over", 0, 0);

      if (koldir == "op") 
      {
        circleY = firkantY - diameter/2
        circleY -= 1.7;
  
      } else if (koldir == "nede")
      {
        circleY = firkantY + firkantH + diameter/2
        circleY += 1.7;
      } else if (koldir == "højre")
      {
        circleX = firkantX + firkantW + diameter/2
        circleX  += 1.7;
      } else if (koldir == "venstre")
      {
        circleX = firkantX - diameter/2
        circleX -= 1.7;
      }

      return { tjek: true, x: circleX, y: circleY };
     }

     return false;
    }

    //funktion der "glider" spilleren på forhindrinngerne
    function SpillersHastighed(vinkel, angleSpeed, radius)
    {
      xPlayerHastighed = -cos(vinkel) * angleSpeed * radius;
      yPlayerHastighed = -sin(vinkel) * angleSpeed * radius;

    }




    //funktion mellem to cirkler
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
  function knap(forhindring, forhindringTjek,knapX, knapY, knapW, knapH)
  {
    push();
    if (forhindringTjek)
    {
      fill(0,255,0);
    } else
    {
      fill(255,0,0);
    }
    
    rect(knapX, knapY, knapW, knapH);
    fill(255);
    textSize(20);
    text(forhindring, 360, 480);
    if (mouseIsPressed && mouseX > knapX && mouseX < knapX + knapW && mouseY > knapY && mouseY < knapY + knapH)
    {
      if (forhindringTjek == false)
      {
        return forhindringTjek = true;
      }
      else 
      {
        return forhindringTjek = false;
      }
    }
    pop();
  }

class BoldeForhindring
  {
    constructor(BoldeforhindringStartVinkel, BoldeforhindringHastighed, diameter,spredning)
    {
      this.BoldeforhindringStartVinkel = BoldeforhindringStartVinkel;
      this.BoldeforhindringHastighed = BoldeforhindringHastighed;
      this.diameter = diameter;
      this.spredning = spredning;

      // Initiel position
      this.x = cos(this.BoldeforhindringStartVinkel) * 300;
      this.y = sin(this.BoldeforhindringStartVinkel) * 300;
      
      // Fart komponenter med tilfældig spredning
      this.vx = -cos(this.BoldeforhindringStartVinkel) * this.BoldeforhindringHastighed * random(1+this.spredning,1-this.spredning);
      this.vy = -sin(this.BoldeforhindringStartVinkel) * this.BoldeforhindringHastighed * random(1+this.spredning,1-this.spredning);
    }

    SkydBoldeforhindring()
    {
      // Update position by velocity
      this.x += this.vx;
      this.y += this.vy;




      // Check for collision with player
      if (KollisionCirkel(this.x, this.y, this.diameter, xPlayer, yPlayer, 20))
      {// Skub spilleren i bevægelsesretningen
        xPlayerHastighed += this.vx ; 
        yPlayerHastighed += this.vy ;
        Forhindringerbolde.splice(Forhindringerbolde.indexOf(this), 1); // Fjern bolden ved kollision
      }
      else
      {
        // Draw the ball if no collision
        push();
        fill(255,0,0);
        circle(this.x, this.y, this.diameter);
        pop();
      }
    }

  }



///Vg forhindringer
  class VægForhindring
{
    constructor(bredde, højde)
    {
        //random spawn på enten venstre eller højre side
        this.tjek = floor(random(2))
            if (this.tjek == 0)
            {
                this.x = random(-550, -450);
            } else
            {
                this.x = random(450, 550);
            }

        //random spawn på y-aksen
        this.y = random(-250, 250);

        this.bredde = bredde;
        this.højde = højde;
        this.fart = random(1, 3);;

        if (this.tjek == 1)
            {
                this.fart = this.fart * -1;
            }
        
    }

    tegn()
    {
        rect(this.x, this.y, this.bredde, this.højde);
    }

    bevæg()
    {
        this. x += this.fart
    }
    
}

function SpillerHastighedGlobal(hastighedGlobal)
{
    xPlayerHastighed = hastighedGlobal;
    yPlayerHastighed = 0;
}