
function Firkantkollition(KasseX, KasseY, KasseBredde, KasseHøjde, KasseHastighedX, KasseHastighedY, SpillerX, SpillerY, Spillerradius,)
{
if (SpillerX + Spillerradius > KasseX && SpillerX < KasseX) 
{
    xPlayerHastighed = KasseHastighedX -2
}


if (SpillerX - Spillerradius < KasseX + KasseBredde && SpillerX > KasseX + KasseBredde - 5) 
{
    xPlayerHastighed = KasseHastighedX + 2
}

if (SpillerY + Spillerradius > KasseY && SpillerY < KasseY)
{
    yPlaterHastighed = KasseHastighedY - 2  
}

if (SpillerY - Spillerradius < KasseY + KasseHøjde && SpillerY > KasseY + KasseHøjde - 5)
{
    yPlaterHastighed = KasseHastighedY + 2  
}







}