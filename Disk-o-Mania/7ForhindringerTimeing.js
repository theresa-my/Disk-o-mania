function ForhindringerTimeingSetup()
{
   GameTime = 0;
   last30SecondMark = 0;
   last60SecondMark = 0;
  
    //Lav forhindringsbolde
    Forhindringerbolde = []
    BoldeforhindringStartV = random(0,2*PI);
    for (let i = 0; i < 10; i++)
    {
        Forhindringerbolde[i] = new BoldeForhindring(BoldeforhindringStartV,2.5,15,0.7)
    }
  
     vægForhindringer = [];

    

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
  let GameTimeseconds = Math.floor(GameTime / 60);
   text(GameTimeseconds, 300, -250);


  // Check for 30-second milestones
  let current30Mark = Math.floor(GameTimeseconds / 30) * 30;
  if (current30Mark > last30SecondMark && current30Mark > 0) {
    // Trigger 30-second event
    trigger30SecondEvent();
    last30SecondMark = current30Mark;
  }
  

  // Check for 60-second milestones
  let current60Mark = Math.floor(GameTimeseconds / 60) * 60;
  if (current60Mark > last60SecondMark && current60Mark > 0) {
    // Trigger 60-second event
    trigger60SecondEvent();
    last60SecondMark = current60Mark;
  }


  for (let i = 0; i < Forhindringerbolde.length; i++)
    {
      Forhindringerbolde[i].SkydBoldeforhindring();
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
    }
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



  for (let i = 0; i < 5; i++)
  {
    vægForhindringer.push(new VægForhindring(30, 60, 0.5, 1));
  }



  
}


function trigger60SecondEvent()
{
  if(SolidVæggeforhindringTjek)
  {
    vægForhindringer.push(new SolidVægForhindring(constructor(x, y, bredde, højde, fart, retningY, retningX)));
 
    vægForhindringer.push(new SolidVægForhindring(constructor(x+1500, y, bredde, højde, fart, retningY, retningX)));
  } //gør x eller y større for at skabe et delay mellem de to solid væg forhindringer
}   