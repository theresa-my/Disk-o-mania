
class VægForhindring
{
    constructor(bredde, højde)
    {
        //random spawn på enten venstre eller højre side
        this. tjek = floor(random(1))
            if (this.tjek == 0)
            {
                this.x = random(-550, 450);
            } else
            {
                this.x = random(450, 550);
            }

        //random spawn på y-aksen
        this.y = random(10, 490);

        this.bredde = bredde;
        this.højde = højde;
        this.fart = 1;
    }

    tegn()
    {
        rect(this.x, this.y, this.bredde, this.højde);
    }

    bevæg()
    {
         if (tjek == 0)
         {
            this. x += this.fart
         } else
         {
            this.x -= this.fart
         }
    }
    
}