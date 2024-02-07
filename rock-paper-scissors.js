
function playround(){

    function randomselector(){
        selectionindex = Math.floor(Math.random()*3)
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

    let userSelection = undefined;
    while(!(userSelection === "ROCK" || userSelection === "PAPER" || userSelection === "SCISSORS")){

    let userInput = prompt("Rock, paper, or scissors?");
    userSelection = userInput.toUpperCase();
    }
    

    if(userSelection === "ROCK"){
        switch(compSelection){
            case "ROCK":
                return "You both chose rock, it's a tie!";
                break;
            
            case "PAPER":
                return "The computer chose paper, you lost!";
                break;

            case "SCISSORS":
                return "The computer chose scissors, you won!"
                break;
        }
    }

    if(userSelection === "PAPER"){
        switch(compSelection){
            case "ROCK":
                return "The computer chose rock, you won!";
                break;
            
            case "PAPER":
                return "You both chose paper, it's a tie!";
                break;

            case "SCISSORS":
                return "The computer chose scissors, you lost!"
                break;
        }
    }

    if(userSelection === "SCISSORS"){
        switch(compSelection){
            case "ROCK":
                return "The computer chose rock, you lost!";
                break;
            
            case "PAPER":
                return "The computer chose paper, you won!";
                break;

            case "SCISSORS":
                return "You both chose scissors, it's a tie!"
                break;
        }
    }
}

function playGame(){
    let computerScore = 0;
    let humanScore = 0;
    
    for(let i = 0; i < 5; i++){

       result = playround();
       switch(result){
        case "You both chose rock, it's a tie!":
            computerScore += 1;
            humanScore += 1;
            break;
        case "The computer chose paper, you lost!":
            computerScore += 1;
            break;
        case "The computer chose scissors, you won!":
            humanScore += 1;
            break;
        case "The computer chose rock, you won!":
            humanScore += 1;
            break;
        case "You both chose paper, it's a tie!":
            computerScore += 1;
            humanScore += 1;
            break;
        case "The computer chose scissors, you lost!":
            computerScore += 1;
            break;
        case "The computer chose rock, you lost!":
            computerScore += 1;
            break;
        case "The computer chose paper, you won!":
            humanScore += 1;
            break;
        case "You both chose scissors, it's a tie!":
            humanScore += 1;
            computerScore += 1;
            break;
        
       }
       console.log(result);
    }

    if(humanScore > computerScore){
        console.log(`You won the game ${humanScore}:${computerScore}!`);
    }

    else if(humanScore < computerScore){
        console.log(`You lost the game ${humanScore}:${computerScore}!`);
    }

    else{
        console.log(`It's a tie! ${humanScore}:${computerScore}`);
    }
    
}

playGame();





