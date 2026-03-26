
class VægForhindring
{
    constructor(bredde, højde)
    {
        //random spawn på enten venstre eller højre side
        this.tjek = floor(random(2))
            if (this.tjek == 0)
            {
                this.x = random(-550, -450);
            } else
            {
                this.x = random(450, 550);
            }

        //random spawn på y-aksen
        this.y = random(-250, 250);

        this.bredde = bredde;
        this.højde = højde;
        this.fart = random(1, 3);;
    }

    tegn()
    {
        rect(this.x, this.y, this.bredde, this.højde);
    }

    bevæg()
    {
         if (this.tjek == 0)
         {
            this. x += this.fart
         } else
         {
            this.x -= this.fart
         }
    }
    
}