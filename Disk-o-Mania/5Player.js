function PlayerSetup()
{
    playerAcceleration = 0.1;
    xPlayer = 10;    
    yPlayer = 50;
    xPlayerHastighed = 0;
    yPlayerHastighed = 0;
    
    // spillerens radius (størrelse)
    rPlayer = 20;  
    
    //vinkel for spiller
    thetaPlayer = atan2(yPlayer, xPlayer);
    dirPlayer = 1;
  
    //drejede koordinater for spiller
    xPlayerDrejet = 0 
    yPlayerDrejet = 0

    //Acceleration i forhold til vinkelhastighed og radius
    accCentripital = 0;
    kollisionTjek = [false, 0, 0];
}


function PlayerDraw()
{
    //bevæg spilleren
    xPlayer += xPlayerHastighed;
    yPlayer += yPlayerHastighed;

    //spiller bevægelse med piletaster
    if (keyIsDown(UP_ARROW)) 
    {
      xPlayerHastighed += cos(dirPlayer) * playerAcceleration;
      yPlayerHastighed += sin(dirPlayer) * playerAcceleration;
    }
    if (keyIsDown(DOWN_ARROW)) 
    {
      xPlayerHastighed -= cos(dirPlayer) * playerAcceleration;
      yPlayerHastighed -= sin(dirPlayer) * playerAcceleration;
    }
    if (keyIsDown(LEFT_ARROW)) 
    {
      dirPlayer -= 0.05;
    }
    if (keyIsDown(RIGHT_ARROW)) 
    {
      dirPlayer += 0.05;
    }

   

    //friktion
    xPlayerHastighed *= 0.98;
    yPlayerHastighed *= 0.98;
    

    //tegn spiller
    push();
      fill(255,0,0);
      circle(xPlayer, yPlayer, rPlayer);

      fill(255) //Øjne
      circle(xPlayer + cos(dirPlayer-PI/4)*10, yPlayer + sin(dirPlayer-PI/4)*10, 10);
      circle(xPlayer + cos(dirPlayer+PI/4)*10, yPlayer + sin(dirPlayer+PI/4)*10, 10);
      fill(0) //Pupiller
      circle(xPlayer + cos(dirPlayer-PI/4)*10, yPlayer + sin(dirPlayer-PI/4)*10, 5);
      circle(xPlayer + cos(dirPlayer+PI/4)*10, yPlayer + sin(dirPlayer+PI/4)*10, 5);
    pop();


    //Udregn vinkelhastighed og og afstand fra spiller til centrum (0,0)
    vinkelHastighed = 2*PI/(1/(aktuelAngleSpeed * 60))*0.02
    afstandTilCentrum = Math.sqrt(xPlayer**2 + yPlayer**2)
  
  
    //Is eller ej
    if (IsTjek)
    {
      // ny acceleration baseret på vinkelhastighed og afstand til centrum
      accCentripital = vinkelHastighed ** 2 * afstandTilCentrum;

      // få spilleren til at glide på is
      if (xPlayer > 0)
      {
        xPlayer += accCentripital * cos(atan(yPlayer/xPlayer));
        yPlayer += accCentripital * sin(atan(yPlayer/xPlayer));
      } else
      {
        xPlayer -= accCentripital * cos(atan(yPlayer/xPlayer));
        yPlayer -= accCentripital * sin(atan(yPlayer/xPlayer));
      }
    }

   // opdater afstand til centrum og vinkel
    afstandTilCentrum = Math.sqrt(xPlayer**2 + yPlayer**2)
    thetaPlayer = atan2(yPlayer, xPlayer);

    // Manuel rotation af spillerens position omkring centrum
    //Dette gør at spilleren roterer
    thetaPlayer += aktuelAngleSpeed;
    xPlayer = afstandTilCentrum * cos(thetaPlayer);
    yPlayer = afstandTilCentrum * sin(thetaPlayer);

    //spillerens orientering rykker sig med at den roterer
    // Altså den "kigger" den rigtige vej
    dirPlayer += aktuelAngleSpeed;
    

    //tjek for kollision med roterende forhindringer
    for (let i = 0; i < forhindringer.length; i++)
    {
      //Få spillerens drejede korodinater
      drejdeKoor = DrejCirkel(xPlayer, yPlayer, forhindringer[i].angle);
      
      //Tjek for kollision
     let kollitionstjek = Kollision(drejdeKoor[0], drejdeKoor[1], rPlayer, forhindringer[i].x, forhindringer[i].y, forhindringer[i].diameterwidth, forhindringer[i].height);
      
      //Spiller "glider"på forhindringer
      if (kollitionstjek)
      {
       KollitionVinkel( forhindringer[i].angle, forhindringer[i].angleSpeed, afstandTilCentrum);
       //Firkantkollition(forhindringer[i].x, forhindringer[i].y, forhindringer[i].diameterwidht, forhindringer[i].height, forhindringer[i].angleSpeed*cos(forhindringer[i].angle), forhindringer[i].angleSpeed*sin(forhindringer[i].angle),drejdeKoor[0], drejdeKoor[1], rPlayer);
      } 


    }

    circle(0,0,60) //Centrum cirkel
    if (KollisionCirkel(0,0,60,xPlayer,yPlayer,rPlayer)) //Kollision med centrum cirkel
    {
      xPlayerHastighed *= -1;
      yPlayerHastighed *= -1;

    }







    //Kollision med yderkanten
    if (afstandTilCentrum > 280)
    {
     state = "gameOver";
    }

}











