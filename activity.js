var user = prompt("What do you want to do?").toLowerCase();
var Saturday = true;
var Sunday = false;
var home = true;
var bored = true;
switch(user){
    case 'nothing':
        if(home && bored){
            console.log("Let's do something anyway!");
        }
        else{
           console.log("It is not that hard to do."); 
        }
        break;
    case 'you':
        console.log("No, you can't do me. I am too hot and sweaty.");
        break;
    case "exercise":
        console.log("Wow, go you.");
        break;
    case "music":
        console.log("I hope to hear what you are making someday.");
        break;
    default:
    if(Saturday || Sunday){
        console.log("You have fun, then.");
        
    }
    else{
        console.log("See you later then.");
    }
    break;
    
}