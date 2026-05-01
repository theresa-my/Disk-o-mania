
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



/////////////////////////////////////////////////
//De forskellige forhindringstyper klasser
/////////////////////////////////////////////////


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
    push();
      fill(245, 149, 65);
      rect(this.x, this.y, this.bredde, this.højde);
    pop();
  }

  bevæg()
    {
      this. x += this.fart * this.retningX
      this.y += this.fart * this.retningY

      // tjek for kollision med spiller
      let kollisiontjek = Kollision(xPlayer, yPlayer, rPlayer, this.x, this.y, this.bredde, this.højde);
      if (kollisiontjek)
      {
        Firkantkollition(this.x, this.y, this.bredde, this.højde, this.fart*this.retningX, this.fart*this.retningY, xPlayer, yPlayer, rPlayer);
      }
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
        this.tjek2 = floor(random(2))
        
        //tjek - 1 = vandret
        //tjek - 0 = lodret

        //tjek2 - 0 = kommer fra HØJRE side
        //tjek2 - 1 = kommer fra VENSTRE side

        //Kalder metode der bestemmer forhindringens start position
        this.VandretEllerLodret();
    }

    VandretEllerLodret()
    {
          //random spawn vandret
          if (this.tjek == 1)
         { 
            this.retningY = 0;

            //random spawn på y-aksen
            this.y = random(-skiveDiameter/2, skiveDiameter/2);

            if (this.tjek2 == 0)
            {
                this.x = random(canvaBredde/2 + 50, canvaBredde/2 + 150);
                this.retningX = -1;
                
            } else
            {
                this.x = random(-canvaBredde/2 - 150, -canvaBredde/2 - 50);
                this.retningX = 1;
            }         
          } else //random spawn Lodret
          {
            this.retningX = 0;
            //random spawn på x-aksen
            this.x = random(-skiveDiameter/2, skiveDiameter/2);

            if (this.tjek2 == 0)
            {
                this.y = random(canvaHøjde/2 + 50, canvaHøjde/2 + 150);
                this.retningY = -1;
            } else
            {
                this.y = random(-canvaHøjde/2 - 50, - canvaHøjde/2 - 150);
                this.retningY = 1;
            }
          }
    }
    
    tegn()
    {
        push();
          fill(81, 245, 66);
          rect(this.x, this.y, this.bredde, this.højde);
        pop();
    }

    bevæg()
    {
        this.x += this.fart * this.retningX;
        this.y += this.fart * this.retningY;

        //tjek for kollision med spiller
        let kollisiontjek = Kollision(xPlayer, yPlayer, rPlayer, this.x, this.y, this.bredde, this.højde);
        if (kollisiontjek)
        {
          Firkantkollition(this.x, this.y, this.bredde, this.højde, this.fart*this.retningX, this.fart*this.retningY, xPlayer, yPlayer, rPlayer);

          if (this.tjek == 1) //vandret kollision
          {
            
             
          } else //lodret kollision
          {
           //  yPlayerHastighed = this.fart ;
          }
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
