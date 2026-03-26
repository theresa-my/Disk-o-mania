function setupStart()
{

}

function drawStart()
{
    push();
    background(0);
    fill(255,0,0);
    textSize(110);
    textFont("Impact");
    text ("Disk-o-Mania", 110, 230);
    pop();

    if (keyIsPressed)
    {
        state = "menu";
    }

}