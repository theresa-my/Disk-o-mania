

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

  

//funktion der "glider" spilleren på forhindringerne
function SpillersHastighed(vinkel, angleSpeed, radius)
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



function SpillerHastighedGlobal(hastighedGlobal)
{
    xPlayerHastighed = hastighedGlobal;
    yPlayerHastighed = 0;
}



/////////////////////////////////////////////////
//De forskellige forhindringstyper klasser
/////////////////////////////////////////////////


class HulForhindring
{
  constructor()
  {
    this.x = random(-200, 200);
    this.y = random(-200, 200);
    this.diameter = random(20, 50);
    this.creationFrame = frameCount; // Gem hvornår objektet blev skabt

  }

  tegn()
  {
    // Beregn hvor mange frames der er gået siden oprettelse
    let elapsedFrames = frameCount - this.creationFrame;
    
    // 4 sekunder = 240 frames (ved 60 FPS)
    let blinkDuration = 240;

    if (elapsedFrames < blinkDuration)
      {
        push();
        fill(0)
        //Blinkende effekt for hul forhindringer (blinker hvert 30 frame)
        if ((elapsedFrames / 30) % 2 < 1) 
        {
           circle(this.x, this.y, this.diameter);
        } 
        pop();
      } else
      {
        push();
        fill(0)
        this.xReel = this.x
        this.yReel = this.y
        circle(this.xReel, this.yReel, this.diameter);
        pop();
      }
  }
}

class SolidVæg
{
  constructor(x, y, bredde, højde, fart, retningY, retningX, delay)
  {
    this.x = x
    this.y = y;
    this.bredde = bredde;
    this.højde = højde;
    this.fart = fart;
    this.retningY = retningY;
    this.retningX = retningX;
  }

  tegn()
  {
    rect(this.x, this.y, this.bredde, this.højde);
  }

  bevæg()
    {
      this. x += this.fart * this.retningX
      this.y += this.fart * this.retningY
    }

}

///Væg forhindringer
class VægForhindring
{
    constructor(bredde, højde, fart)
    {
        this.bredde = bredde;
        this.højde = højde;
        this.fart = fart;
        this.tjek = floor(random(2))
       
        //Random tjek, der bestemmer hvilken retning forhindringen kommer fra, 
        // og dermed hvilken retning den bevæger sig i
        if (this.tjek == 1)
        {
          this.retningX = -1;
          this.retningY = -1;
        } else {
          this.retningX = 1;
          this.retningY = 1;
        }

        //Kalder metode der bestemmer forhindringens start position
        this.VandretEllerLodret();
    }

    VandretEllerLodret()
    {
          //random spawn vandret
          if (this.tjek == 1)
         { 
            //random spawn på y-aksen
            this.y = random(-250, 250);

            if (this.tjek == 0)
            {
                this.x = random(-550, -450);
            } else
            {
                this.x = random(450, 550);
            }         
          } else //random spawn Lodret
          {
            //random spawn på x-aksen
            this.x = random(-250, 250);

            if (this.tjek == 0)
            {
                this.y = random(-450, -350);
            } else
            {
                this.y = random(350, 450);
            }
          }
    }
    
    tegn()
    {
        rect(this.x, this.y, this.bredde, this.højde);
    }

    bevæg()
    {
        this.x += this.fart * this.retningX;
        this.y += this.fart * this.retningY;

        //tjek for kollision med spiller
        let kollisiontjek = Kollision(xPlayer, yPlayer, rPlayer, this.x, this.y, this.bredde, this.højde);
        if (kollisiontjek)
        {
          
        }
    }
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
