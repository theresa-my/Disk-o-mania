function setupStart()
{

}

function drawStart()
{
    push();
        background(0);
        textSize(110);
        textFont("Impact");

        let sætning = "Disk-o-Mania";
        let x= 0;

        //Tilfældig farve pr. bogstav
        for( let i = 0; i < sætning.length; i++) 
        {
            fill ( random(255), random(255), random(255))
            text(sætning[i], canvaBredde / 2 - 297 + x, canvaHøjde / 2 - 15);
            x += textWidth(sætning[i]) + 4;
        }
    pop();

    push();
        fill(255,0,0);
        textSize(30);
        textFont("Impact");
        textAlign(CENTER, CENTER);
        text ("Tryk mellemrum for at starte", canvaBredde / 2, canvaHøjde / 2 + 100);
    pop();


    if (keyIsPressed)
    {
        state = "menu";
    }

}