function ForhindringerTimeingSetup()
{
   GameTime = 0;
   last30SecondMark = 0;
   last60SecondMark = 0;
    randomting = 0;
  
    //Lav de første forhindringsbolde
    Forhindringerbolde = []
    BoldeforhindringStartV = random(0,2*PI);
    for (let i = 0; i < 10; i++)
    {
        Forhindringerbolde[i] = new BoldeForhindring(BoldeforhindringStartV,2.5,15,0.7)
    }
  
     vægForhindringer = [];
     solidVægForhindringer = [];

    //Lav roterede forhindringer
    forhindringer = [];
    for (let i = 0; i < 1; i++)
    {
      forhindringer.push(new RoterendeObjekt(0,aktuelAngleSpeed+0.003 ,"firkant"))
    }
}






function ForhindringerTimeingDraw()
{
  GameTime = GameTime + 1;
 
  
  // Konveter frames til sekunder (går ud fra 60 FPS)
  let GameTimeSeconds = Math.floor(GameTime / 60);
  //Spille tid printet på spilleskærm
  push();
    fill(255);
    textSize(32);
  text(GameTimeSeconds, 300, -250);
  text(randomting, 300, -200);
  pop();

  // Check for 30-second milestones
  let current30Mark = Math.floor(GameTimeSeconds / 5) * 5;
  if (current30Mark > last30SecondMark && current30Mark > 0) 
  {
    // Trigger 30-second event
    trigger30SecondEvent();
    last30SecondMark = current30Mark;
  }
  

  // Check for 60-second milestones
  let current60Mark = Math.floor(GameTimeSeconds / 15) * 15;
  if (current60Mark > last60SecondMark && current60Mark > 0) 
  {
    // Trigger 60-second event
    trigger60SecondEvent();
    last60SecondMark = current60Mark;
  }


  for (let i = 0; i < Forhindringerbolde.length; i++)
  {
      Forhindringerbolde[i].SkydBoldeforhindring();
  }





  //print Firkant forhindringer
  if (FirkantforhindringTjek)
  {
    //Firkant forhindringer
    for (let i = 0; i < forhindringer.length; i++)
    {
      forhindringer[i].roter(0, 100, 30, 60);
    }
  }




//print VægForhinringer
  
    for (let i = 0; i < vægForhindringer.length; i++)
    {
      vægForhindringer[i].tegn();
      vægForhindringer[i].bevæg();
    }
//Print solidvægforhindring
  for (let i = 0; i < solidVægForhindringer.length; i++)
    {
      solidVægForhindringer[i].tegn();
      solidVægForhindringer[i].bevæg();
    }
}



function trigger30SecondEvent() 
{
  //Bolde forhindringer
  if (BoldeforhindringTjek)
  {
      BoldeforhindringStartV = random(0,2*PI);
    for (let i = 0; i < 10; i++)
    {
        Forhindringerbolde[i] = new BoldeForhindring(BoldeforhindringStartV,2.5,15,0.7)
    }
  }

  //lav vægforhindringer
  if (VæggeforhindringTjek)
  {
    for (let i = 0; i < 5; i++)
    {
      vægForhindringer.push(new VægForhindring(60, 60, 0.5, 1));
    }
  }
}

  





function trigger60SecondEvent()
{
  randomting = random(1,9);
  //randomting = 7.5


    let x1;
    let y1;
    let bredde1;
    let højde1;
    let fart1;
    let retningY1;
    let retningX1;

    let x2;
    let y2;
    let bredde2;
    let højde2;
    let fart2;
    let retningY2;
    let retningX2;


  if (randomting < 2)
  {
    //top
    x1 = -canvaBredde/4;
    y1 = -canvaHøjde/2;
    bredde1 = canvaBredde/2;
    højde1 = 20;
    fart1 = 0.5;
    retningY1 = 1;
    retningX1 = 0;

    x2 = -22222
    y2 = 0
    bredde2 = 0
    højde2 = 0
    fart2 = 0
    retningY2 = 0
    retningX2 = 0
  }
  else if (randomting < 3)
  {
    //bund
    x1 = -canvaBredde/4;
    y1 = canvaHøjde / 2 + 20;
    bredde1 = canvaBredde/2;
    højde1 = 20;
    fart1 = 0.5;
    retningY1 = -1;
    retningX1 = 0;

    x2 = -22222
    y2 = 0
    bredde2 = 0
    højde2 = 0
    fart2 = 0
    retningY2 = 0
    retningX2 = 0
  }
  else if (randomting < 4)
  {
    //venstre
    x1 = -canvaBredde/2 - 20;
    y1 = -canvaHøjde/4;
    bredde1 = 20;
    højde1 = canvaHøjde/2;
    fart1 = 0.5;
    retningY1 = 0;
    retningX1 = 1;

    x2 = -22222
    y2 = 0
    bredde2 = 0
    højde2 = 0
    fart2 = 0
    retningY2 = 0
    retningX2 = 0
  }
  else if (randomting < 5)
  {
    //højre
    x1 = canvaBredde/2 + 20;
    y1 = -canvaHøjde/4;
    bredde1 = 20;
    højde1 = canvaHøjde/2;
    fart1 = 0.5;
    retningY1 = 0;
    retningX1 = -1;

    x2 = -22222
    y2 = 0
    bredde2 = 0
    højde2 = 0
    fart2 = 0
    retningY2 = 0
    retningX2 = 0
  }
  else if (randomting < 6)
  {
    //Side Side venstre top
    x1 = -canvaBredde/2 - 20;
    y1 = -canvaHøjde/4 ;
    bredde1 = 20;
    højde1 = canvaHøjde/4;
    fart1 = 0.5;
    retningY1 = 0;
    retningX1 = 1;

    x2 = canvaBredde/2 + 20;
    y2 = 0;
    bredde2 = 20;
    højde2 = canvaHøjde/4;
    fart2 = 0.5;
    retningY2 = 0;
    retningX2 = -1;
  }
  else if (randomting < 7)
  {
    //Side Side højre top
    x1 = canvaBredde/2 - 20;
    y1 = -canvaHøjde/4 ;
    bredde1 = 20;
    højde1 = canvaHøjde/4;
    fart1 = 0.5;
    retningY1 = 0;
    retningX1 = -1;

    x2 = -canvaBredde/2 + 20;
    y2 = 0;
    bredde2 = 20;
    højde2 = canvaHøjde/4;
    fart2 = 0.5;
    retningY2 = 0;
    retningX2 = 1;

  }
  else if (randomting < 8)
  {
    //over-under venstre top
    x1 = -canvaBredde/4;
    y1 = -canvaHøjde/2 - 20;
    bredde1 = canvaBredde/4;
    højde1 = 20;
    fart1 = 0.5;
    retningY1 = 1;
    retningX1 = 0;

    x2 = 0;
    y2 = canvaHøjde/2 + 20;
    bredde2 = canvaBredde/4;
    højde2 = 20;
    fart2 = 0.5;
    retningY2 = -1;
    retningX2 = 0;
  }
  else if (randomting < 9)
  {
    //over-under højre top
    x1 = 0;
    y1 = -canvaHøjde/2 - 20;
    bredde1 = canvaBredde/4;
    højde1 = 20;
    fart1 = 0.5;
    retningY1 = -1;
    retningX1 = 0;

    x2 = canvaBredde/4;
    y2 = canvaHøjde/2 + 20;
    bredde2 = canvaBredde/4;
    højde2 = 20;
    fart2 = 0.5;
    retningY2 = 1;
    retningX2 = 0;
  }


  if(SolidVæggeforhindringTjek)
  {
    solidVægForhindringer.push(new SolidVæg(x1, y1, bredde1, højde1, fart1, retningY1, retningX1));
    solidVægForhindringer.push(new SolidVæg(x2, y2, bredde2, højde2, fart2, retningY2, retningX2));
  } //gør x eller y større for at skabe et delay mellem de to solid væg forhindringer

  }   
