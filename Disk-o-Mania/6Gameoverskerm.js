function setupGameover()
{


}

function drawGameover()
{
    push();
    textSize(100);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    textFont("Impact");
    text ("GAME OVER", canvaBredde/2, canvaHøjde/2);
    pop();
    
    if (keyIsPressed)
     {
         state = "menu";
     }
}