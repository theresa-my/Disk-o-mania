function PlayerSetup()
{
    PlayerAcceleration = 0.1;
    xPlayer = 10;    
    yPlayer = 50;
    xPlayerHastighed = 0;
    yPlayerHastighed = 0;

    rPlayer = 20;  // spillerens radius (størrelse)
    playerDistance = dist(0, 0, xPlayer, yPlayer);  // afstand til centrum
    
    //vinkel for spiller
    thetaPlayer = atan2(yPlayer, xPlayer);
    dirPlayer = 1;
  
    //drejede koordinater for spiller
    xPlayerDrejet = 0 
    yPlayerDrejet = 0
    
}


function PlayerDraw()
{
    //spiller bevægelse med piletaster
    if (keyIsDown(UP_ARROW)) {
        xPlayerHastighed += cos(dirPlayer) * PlayerAcceleration;
        yPlayerHastighed += sin(dirPlayer) * PlayerAcceleration;
        }
    if (keyIsDown(DOWN_ARROW)) {
        xPlayerHastighed -= cos(dirPlayer) * PlayerAcceleration;
        yPlayerHastighed -= sin(dirPlayer) * PlayerAcceleration;
        }
    if (keyIsDown(LEFT_ARROW)) {
        dirPlayer -= 0.05;
        }
    if (keyIsDown(RIGHT_ARROW)) {
        dirPlayer += 0.05;
        }

    xPlayer += xPlayerHastighed;
    yPlayer += yPlayerHastighed;

    //friktion
    xPlayerHastighed *= 0.98;
    yPlayerHastighed *= 0.98;
    

    //tegn spiller
    push();
    fill(255,0,0);
    circle(xPlayer, yPlayer, rPlayer);
    circle(xPlayer + cos(dirPlayer-PI/4)*10, yPlayer + sin(dirPlayer-PI/4)*10, 10);
    circle(xPlayer + cos(dirPlayer+PI/4)*10, yPlayer + sin(dirPlayer+PI/4)*10, 10);
    pop();


    //Udregn vinkelhastighed og radius for spillerens position
    vinkelHastighed = 2*PI/(1/(aktuelAngleSpeed * 60))*0.02
    radius = Math.sqrt(xPlayer**2 + yPlayer**2)
  
  
    //Is eller ej
    if (level == "Is")
    {
      acc = vinkelHastighed ** 2 * radius;

      // få spilleren til at glide
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

   // opdater afstand og vinkel
    radius = Math.sqrt(xPlayer**2 + yPlayer**2)
   
    thetaPlayer = atan2(yPlayer, xPlayer);

    // rotation af position omkring centrum
    thetaPlayer += aktuelAngleSpeed;
    xPlayer = radius * cos(thetaPlayer);
    yPlayer = radius * sin(thetaPlayer);

    dirPlayer += aktuelAngleSpeed;
    

    //tjek for kollision med roterende forhindringer
    for (let i = 0; i < forhindringer.length; i++)
    {
      //Få spillerens drejede korodinater
      drejdeKoor = DrejCirkel(xPlayer, yPlayer, forhindringer[i].angle);
      
      //Tjek for kollision
      let kollisionstjek = Kollision(drejdeKoor[0], drejdeKoor[1], rPlayer, forhindringer[i].x, forhindringer[i].y, forhindringer[i].diameterwidth, forhindringer[i].height);
      
      //Spiller "glider"på forhindringer
      if (kollisionstjek)
      {
        SpillersHastighed( forhindringer[i].angle, forhindringer[i].angleSpeed, radius);
      }
      
    }

    

    //Kollision med Yderkanten
    if (((yPlayer^2+xPlayer^2)^0.5) > 300)
    {
     state = "gameOver";
    }
}











