function setup() {
    createCanvas(800, 600);

    state = 0;
    stateold = 0;
}

function draw() {
    background(220);

    ////State machine
    //Setup

    if (state == stateold)
    {
        return
    }
     else if (state == 1)
    {
        setupStart();
    }
     else if (state==2)
    {
        setupMenu();
    }
     else if (state==3)
    {
        setupSpil();
    }
     else if (state==4)
    {
        setupGameover();
    }

    stateold = state

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



