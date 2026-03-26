function ForhindringerTimeingSetup()
{
    Forhindringerbolde = []

    for (let i = 0; i < 10; i++)
    {
        i = new BoldeForhindring(0,1)

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