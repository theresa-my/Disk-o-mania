function ForhindringerTimeingSetup()
{
    Forhindringerbolde = []
    BoldeforhindringStartV = random(0,2*PI);
    for (let i = 0; i < 10; i++)
    {
        Forhindringerbolde[i] = new BoldeForhindring(BoldeforhindringStartV,2.5,15,0.7)

    }
}

function ForhindringerTimeingDraw()
{
//Firkant forhindringer
  for (let i = 0; i < forhindringer.length; i++)
  {
    forhindringer[i].roter(0, 100, 30, 60);
  }

//Bolde forhindringer
  for (let i = 0; i < Forhindringerbolde.length; i++)
  {
    Forhindringerbolde[i].SkydBoldeforhindring();
  }
}