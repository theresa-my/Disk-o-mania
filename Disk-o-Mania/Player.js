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
    if (keyIsPressed && keyCode === UP_ARROW) {
        xPlayer += cos(dirPlayer*0.1) * 5;
        yPlayer += sin(dirPlayer*0.1) * 5;
        }
    if (keyIsPressed && keyCode === DOWN_ARROW) {
        xPlayer -= cos(dirPlayer*0.1) * 5;
        yPlayer -= sin(dirPlayer*0.1) * 5;
        }
    //draw player
    push();
    fill(255,0,0);
    circle(xPlayer, yPlayer, rPlayer);
    circle(xPlayer + cos(dirPlayer*0.1) * 10, yPlayer + sin(dirPlayer * 0.1) * 80, 10);
    circle(xPlayer + cos(dirPlayer*0.1) * 10, yPlayer + sin(dirPlayer * 0.1) * -80, 10);
    pop();
}