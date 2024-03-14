
//Listen for user's selection

let userInputs = document.querySelectorAll('.userInput')

let userSelection = undefined;

let computerScore = 0;
let humanScore = 0;

let result = undefined;

userInputs.forEach(userInput => {
    userInput.addEventListener('click', ()=>{
        userSelection = userInput.textContent;
        playround();
    })
})

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

    while(!(userSelection === "ROCK" || userSelection === "PAPER" || userSelection === "SCISSORS")){

    }
    


    if(userSelection === "ROCK"){
        switch(compSelection){
            case "ROCK":
                result = "You both chose rock, it's a tie!";
                break;
            
            case "PAPER":
                computerScore += 1;
                result = "The computer chose paper, you lost!";
                break;

            case "SCISSORS":
                humanScore += 1;
                result = "The computer chose scissors, you won!"
                break;
        }
    }

    if(userSelection === "PAPER"){
        switch(compSelection){
            case "ROCK":
                humanScore += 1;
                result = "The computer chose rock, you won!";
                break;
            
            case "PAPER":
                result = "You both chose paper, it's a tie!";
                break;

            case "SCISSORS":
                computerScore += 1;
                result = "The computer chose scissors, you lost!"
                break;
        }
    }

    if(userSelection === "SCISSORS"){
        switch(compSelection){
            case "ROCK":
                computerScore += 1;
                result = "The computer chose rock, you lost!";
                break;
            
            case "PAPER":
                humanScore += 1;
                result = "The computer chose paper, you won!";
                break;

            case "SCISSORS":
                result = "You both chose scissors, it's a tie!"
                break;
        }
    }

    let humandScoreCard = document.querySelector('.humanScore');
    let computerScoreCard = document.querySelector('.computerScore');
    let resultCard = document.querySelector('.result')
    humandScoreCard.textContent = `Your Score: ${humanScore}`;
    computerScoreCard.textContent = `Computer Score: ${computerScore}`;
 

    if(computerScore === 5 || humanScore === 5){
        if(computerScore === 5){
            resultCard.textContent = `You lost the game! Final score
            ${humanScore} : ${computerScore}`;
            humanScore = 0;
            computerScore = 0;
        }

        else{
             resultCard.textContent = `You won the game! Final score
             ${humanScore} : ${computerScore}`;
             humanScore = 0;
             computerScore = 0;
        }
    }

    else{
        resultCard.textContent = `${result}`;
    }




}







