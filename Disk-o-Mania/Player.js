function PlayerSetup()
{
    Playerspeed = 1.8;
    xPlayer = 10;    
    yPlayer = 50;
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
        xPlayer += cos(dirPlayer) * Playerspeed;
        yPlayer += sin(dirPlayer) * Playerspeed;
        }
    if (keyIsDown(DOWN_ARROW)) {
        xPlayer -= cos(dirPlayer) * Playerspeed;
        yPlayer -= sin(dirPlayer) * Playerspeed;
        }
    if (keyIsDown(LEFT_ARROW)) {
        dirPlayer -= 0.05;
        }
    if (keyIsDown(RIGHT_ARROW)) {
        dirPlayer += 0.05;
        }

    

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
    
    
    //Konveter spillerens position til roteret koordinatsystem
    //Lavet med Maple
    //yPlayerDrejet = - (sin(cirkel.angle) * xPlayer - yPlayer * cos(cirkel.angle)) / (sin(cirkel.angle)**2 + cos(cirkel.angle)**2)
    yPlayerDrejet = -xPlayer * sin(cirkel.angle) + yPlayer * cos(cirkel.angle)

    //xPlayerDrejet = (sin(cirkel.angle) * yPlayer + xPlayer * cos(cirkel.angle)) / (sin(cirkel.angle)**2 + cos(cirkel.angle)**2)
    xPlayerDrejet = xPlayer * cos(cirkel.angle) + yPlayer * sin(cirkel.angle)
    

    //tjek for kollision med forhindringer
    for (let i = 0; i < forhindringer.length; i++)
    {
      Kollision(xPlayerDrejet, yPlayerDrejet, rPlayer, forhindringer[i].x, forhindringer[i].y, forhindringer[i].diameterwidth, forhindringer[i].height);
    }

    xPlayer = xPlayerDrejet * cos(cirkel.angle)-yPlayerDrejet * sin(cirkel.angle);
    yPlayer = xPlayerDrejet * sin(cirkel.angle)+yPlayerDrejet * cos(cirkel.angle);

}











