function setup() 
{
    createCanvas(800, 600);

    // start the game in the "spil" state so drawSpil() runs immediately
    state = 2;
    stateold = 0;
}

function draw() 
{
    background(220);

    ////State machine
    //Setup

    // run setup only when the state actually changes (no early return)
    if (state !== stateold) {
        if (state == 0) {
            setupStart();
        } else if (state == 1) {
            setupMenu();
        } else if (state == 2) {
            setupSpil();
        } else if (state == 3) {
            setupGameover();
        }
        stateold = state;
    }

    //Draw
    if (state==0)
    {
        drawStart();
    }
     else if (state==1)
    {
        drawMenu();
    }
     else if (state==2)
    {
        drawSpil();
    }
     else if (state==3)
    {
        drawGameover();
    }
}



