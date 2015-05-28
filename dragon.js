var slaying = true;
var youHit = Math.floor(Math.random()*2);
var damageThisRound = Math.floor(Math.random()*5+1);
var totalDamage = 0; 
var slaying = true;

while(slaying){
    if(youHit === 1){
        console.log("Congratulations, you hit the dragon!");
        totalDamage += damageThisRound;
        if(totalDamage >= 4){
            console.log("You slew the dragon!");
            slaying = false; 
        }
        else{
            youHit = 1;
        }
    }
    else{
        console.log("The dragon defeated you");
    }
     slaying = false; 
}