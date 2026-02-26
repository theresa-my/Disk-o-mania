function setup() {
    createCanvas(800, 600);

    state = 0;

    setupStart();
    setupMenu();
    setupSpil();
    setupGameover();
}

function draw() {
    background(220);
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



