function setupMenu()
{
  transitiontimer = 0;

  // Knapper system, så an kan vælge hvilke forhindringer man vil have
  // Alle forhindringer er på, jo mindre andet er valgt
  forhindringerTjek = true;   
  FirkantforhindringTjek = true;
  VæggeforhindringTjek = true;
  BoldeforhindringTjek = true;
  HulforhindringTjek = true;
  SolidVæggeforhindringTjek = true;
  IsTjek = true;
}

function drawMenu()
{
   //Timer der sikrer at ma nhar tid til at være i menuen
  transitiontimer++;

  //Skift fra menu til spil
  if (keyIsPressed && transitiontimer > 60)
  {
      state = "spil";
      transitiontimer = 0;
  }
    
  //Tekst og layout til menuen
  push();
    background(0);
    fill(255,0,0);
    textSize(110);
    textFont("Impact");

    let sætning = "Disk-o-Mania";
    let x= 0;

    //Tilfældig farve pr. bogstav
    for( let i = 0; i < sætning.length; i++) 
    {
      fill ( random(255), random(255), random(255))
      text(sætning[i], canvaBredde / 2 - 297 + x, canvaHøjde / 2 - 15);
      x += textWidth(sætning[i]) + 4;
    } 
  pop();  

  push();
    fill(255,0,0);
    textSize(30);
    textFont("Impact");
    textAlign(CENTER, CENTER);
    text ("Tryk mellemrum for at starte", canvaBredde/2, canvaHøjde/2 + 100);
  pop();

  //Knappesystemet
  FirkantforhindringTjek = knap("Firkantforhindring", FirkantforhindringTjek, 100, 430, 200, 50);
  BoldeforhindringTjek = knap("Boldeforhindring", BoldeforhindringTjek, 100, 500, 200, 50);
  VæggeforhindringTjek = knap("Væggeforhindring", VæggeforhindringTjek, 300, 430, 200, 50);
  
  IsTjek = knap("Is", IsTjek, 500, 500, 200, 50);
  SolidVæggeforhindringTjek = knap("SolidVæggeforhindring", SolidVæggeforhindringTjek, 500, 430, 200, 50); 
}