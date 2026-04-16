function setupMenu()
{
  transitiontimer = 0;

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
    transitiontimer++;
    fill(222)


if (keyIsPressed && transitiontimer > 30)
{
    state = "spil";
}
    
push();
    background(0);
    fill(255,0,0);
    textSize(110);
    textFont("Impact");
    text ("Disk-o-Mania", 110, 230);
pop();  

push();
    fill(255,0,0);
    textSize(30);
    textFont("Impact");
    text ("Click to start", 350, 400);
pop();

FirkantforhindringTjek = knap("Firkantforhindring", FirkantforhindringTjek, 150, 450, 200, 50);
BoldeforhindringTjek = knap("Boldeforhindring", BoldeforhindringTjek, 150, 400, 200, 50);
VæggeforhindringTjek = knap("Væggeforhindring", VæggeforhindringTjek, 350, 450, 200, 50);
HulforhindringTjek = knap("Hulforhindring", HulforhindringTjek, 350, 400, 200, 50);
IsTjek = knap("Is", IsTjek, 550, 400, 200, 50);
SolidVæggeforhindringTjek = knap("SolidVæggeforhindring", SolidVæggeforhindringTjek, 550, 450, 200, 50);


    
}