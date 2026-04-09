function ForhindringerTimeingSetup()
{

  
  
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
  if (FirkantforhindringTjek)
  {
    //Firkant forhindringer
    for (let i = 0; i < forhindringer.length; i++)
    {
      forhindringer[i].roter(0, 100, 30, 60);
    }
  }


  //Bolde forhindringer
  if (BoldeforhindringTjek)
  {
    for (let i = 0; i < Forhindringerbolde.length; i++)
    {
      Forhindringerbolde[i].SkydBoldeforhindring();
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