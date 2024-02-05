

function randomselector(){
    selectionindex = Math.floor(math.random()*3)
    if(selectionindex == 0){
        return "ROCK"
    }
    else if(selectionindex == 1){
        return "PAPER"
    }
    else if(selectionindex == 2){
        return "SCISSORS"
    }
}

let compSelection = randomselector();

do{

let userSelection = toUpperCase(prompt("Rock, paper, or scissors?"));
}
while(!(userSelection === "ROCK" || userSelection === "PAPER" || userSelection === "SCISSORS"))







