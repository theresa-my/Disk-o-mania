

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



  
    //Kollisions funktion mellem cirkel og firkant
    //Taget fra https://www.jeffreythompson.org/collision-detection/circle-rect.php
    function Kollision(CircleX, CircleY, diameter, FirkantX, FirkantY, FirkantW, FirkantH)
    {

     testX = CircleX;
     testY = CircleY;


     if (CircleX < FirkantX)           
      {
        testX = FirkantX;        // left edge
      }
     
     else if (CircleX > FirkantX+FirkantW)   
      {
        testX = FirkantX+FirkantW;     // right edge
        koldir = "højre";
      }


     if (CircleY < FirkantY)   
      {        
        testY = FirkantY;       // top edge
        koldir = "op";    
      }
     else if (CircleY > FirkantY+FirkantH)   
      {
        testY = FirkantY+FirkantH;     // bottom edge
        koldir = "nede";
      }



     distX = CircleX-testX;
     distY = CircleY-testY;
    
     distanc = sqrt((distX*distX) + (distY*distY) );
    
     if (distanc <= diameter/2) 
     {
       fill(255,0,0);
       text("Game Over", 0, 0);

      if (koldir == "op") 
      {
        yPlayerDrejet -= 20;
      } else if (koldir == "nede")
      {
        yPlayerDrejet += 20;
      } else if (koldir == "højre")
      {
        xPlayerDrejet += 20;
      } else
      {
        xPlayerDrejet -= 20;
      }


     }
    }