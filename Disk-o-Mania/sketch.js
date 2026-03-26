function setup() 
{
    createCanvas(800, 600);

    // start the game in the "spil" state so drawSpil() runs immediately
    state = "start";

    stateold = 0;
    angleMode(RADIANS);
}

function draw() 
{
    background(220);

    ////State machine
    //Setup

    // run setup only when the state actually changes (no early return)
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

    //Draw
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



