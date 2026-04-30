

function setup() 
{
    canvaHøjde = 600;
    canvaBredde = 800;
    createCanvas(canvaBredde, canvaHøjde);
    
    //starter spillet i menu
    state = "start";

    //Hvad gør det her?
    stateold = 0;
    angleMode(RADIANS);
}



function draw() 
{
    background(0);

    ////State machine
    //Setup

    // køre kun setup når state skifter
    if (state !== stateold) {
        if (state == "start") {
            setupStart();
        } else if (state == "menu") {
            setupMenu();
        } else if (state == "spil") {
            setupSpil();
        } else if (state == "gameOver") {
            setupGameover();
        }
        stateold = state;
    }

    //Tegn alle states
    if (state== "start")
    {
        drawStart();
    }
     else if (state == "menu")
    {
        drawMenu();
    }
     else if (state=="spil")
    {
        drawSpil();
    }
     else if (state=="gameOver")
    {
        drawGameover();
    }
}



