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

    push();
        fill(255,0,0);
        textSize(30);
        textFont("Impact");
        text ("Click to start", 350, 400);
    pop();


    if (keyIsPressed)
    {
        state = "menu";
    }

}