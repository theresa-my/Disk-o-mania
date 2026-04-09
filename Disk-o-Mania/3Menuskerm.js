function setupMenu()
{
  transitiontimer = 0;

  forhindringerTjek = true;   
  FirkantforhindringTjek = true;
  VæggeforhindringTjek = true;
  BoldeforhindringTjek = true;
  HulforhindringTjek = true;
  

}

function drawMenu()
{
    transitiontimer++;
    fill(222)
    text (forhindringerTjek, 10, 20);

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

knap("Firkantforhindring",FirkantforhindringTjek,350, 450, 100, 50);

  



        level = "Iss"
    
}