function setupGameover()
{


}

function drawGameover()
{
    //Tekst og layout på gameover skærm
    push();
      textSize(100);
      fill(255, 0, 0);
      textAlign(CENTER, CENTER);
      textFont("Impact");
      text ("GAME OVER", canvaBredde/2, canvaHøjde/2);
    pop();
    
    //Skift til menu hvis der trykkes på en knap
    if (keyIsPressed)
     {
         state = "menu";
     }
}