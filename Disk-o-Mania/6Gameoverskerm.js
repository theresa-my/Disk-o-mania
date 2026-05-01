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
    
    //Timer der sikrer at man har tid til at være i GameOver
   transitiontimer++;

  //Skift fra GameOver til menu
  if (keyIsPressed && transitiontimer > 60)
  {
      state = "menu";
      transitiontimer = 0;
  }
}