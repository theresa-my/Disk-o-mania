function PlayerSetup()
{
    xPlayer = 0;    
    yPlayer = 50;
    rPlayer = 20;
    dirPlayer = 1;

}


function PlayerDraw()
{
    //player movement
    if (keyIsDown(UP_ARROW)) {
        xPlayer += cos(dirPlayer) * 5;
        yPlayer += sin(dirPlayer) * 5;
        }
    if (keyIsDown(DOWN_ARROW)) {
        xPlayer -= cos(dirPlayer) * 5;
        yPlayer -= sin(dirPlayer) * 5;
        }
    if (keyIsDown(LEFT_ARROW)) {
        dirPlayer -= 0.1;
        }
    if (keyIsDown(RIGHT_ARROW)) {
        dirPlayer += 0.1;
        }
    //draw player
    push();
    fill(255,0,0);
    circle(xPlayer, yPlayer, rPlayer);
    circle(xPlayer + cos(dirPlayer-PI/4)*10, yPlayer + sin(dirPlayer-PI/4)*10, 10);
    circle(xPlayer + cos(dirPlayer+PI/4)*10, yPlayer + sin(dirPlayer+PI/4)*10, 10);
    pop();
}