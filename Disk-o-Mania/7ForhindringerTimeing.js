function ForhindringerTimeingSetup()
{
  GameTime = 0;
  last30SecondMark = 0;
  
  
    Forhindringerbolde = []
    BoldeforhindringStartV = random(0,2*PI);
    for (let i = 0; i < 10; i++)
    {
        Forhindringerbolde[i] = new BoldeForhindring(BoldeforhindringStartV,2.5,15,0.7)

    }


    vægForhindringer = [];
    for (let i = 0; i < 5; i++)
    {
      vægForhindringer.push(new VægForhindring(30, 60));
    }

  
    forhindringer = [];
    for (let i = 0; i < 1; i++)
    {
      forhindringer.push(new RoterendeObjekt(0,aktuelAngleSpeed+0.003 ,"firkant"))
    }
}






function ForhindringerTimeingDraw()
{
  GameTime = GameTime + 1;
 
  
  // Convert frames to seconds (assuming 60 FPS)
  let GameTimeseconds = Math.floor(GameTime / 60);
   text(GameTimeseconds, 300, -250);


  // Check for 30-second milestones
  let current30Mark = Math.floor(GameTimeseconds / 30) * 30;
  if (current30Mark > last30SecondMark && current30Mark > 0) {
    // Trigger 30-second event
    trigger30SecondEvent();
    last30SecondMark = current30Mark;
  }
  








  if (FirkantforhindringTjek)
  {
    //Firkant forhindringer
    for (let i = 0; i < forhindringer.length; i++)
    {
      forhindringer[i].roter(0, 100, 30, 60);
    }
  }




//print VægForhinringer
  if (VæggeforhindringTjek)
  {
    for (let i = 0; i < vægForhindringer.length; i++)
    {
      vægForhindringer[i].tegn();
      vægForhindringer[i].bevæg();

      //tjek for kollision mellem spiller og vægforhindringer
      let kollisiontjek = Kollision(xPlayer, yPlayer, rPlayer, vægForhindringer[i].x, vægForhindringer[i].y, vægForhindringer[i].bredde, vægForhindringer[i].højde);
    
      //Spiller "glider" på vægforhindringer
      if (kollisiontjek.tjek)
      {
      SpillerHastighedGlobal(vægForhindringer[i].fart);
      xPlayer = kollisiontjek.x;
      yPlayer = kollisiontjek.y;
      }
    }
  }
}



function trigger30SecondEvent() 
{
  //Bolde forhindringer
  if (BoldeforhindringTjek)
  {
    for (let i = 0; i < Forhindringerbolde.length; i++)
    {
      Forhindringerbolde[i].SkydBoldeforhindring();
    }
  }
}