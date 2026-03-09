function PlayerSetup()
{
    Playerspeed = 1.8;
    xPlayer = 10;    
    yPlayer = 50;
    rPlayer = 20;  // spillerens radius (størrelse)
    playerDistance = dist(0, 0, xPlayer, yPlayer);  // afstand til centrum
    thetaPlayer = atan2(yPlayer, xPlayer);
    dirPlayer = 1;
}


function PlayerDraw()
{
    //player movement
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

    

    //draw player
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

    
}