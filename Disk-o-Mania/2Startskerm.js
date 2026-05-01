function setupStart()
{

}

function drawStart()
{
    push();
        background(0);
        fill(255,0,0);
        textSize(110);
        textAlign(CENTER, CENTER);
        textFont("Impact");
        text ("Disk-o-Mania", canvaBredde/2, canvaHøjde/2 -50);
    pop();

    push();
        fill(255,0,0);
        textSize(30);
        textFont("Impact");
        textAlign(CENTER, CENTER);
        text ("Tryk mellemrum for at starte", canvaBredde/2, canvaHøjde/2 + 100);
    pop();


    if (keyIsPressed)
    {
        state = "menu";
    }

}