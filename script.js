
let  computerScore = 0
let  playerScore = 0

function computerPlay () {
let computerPick = ["rock","paper","scissors"];
let randComputerPick = computerPick[Math.floor(Math.random() * computerPick.length)]
return randComputerPick
}

function playRound(playerSelection, computerSelection) {
  
   //if player picks rock
   if(playerSelection.toLowerCase() === 'rock'){
       if(computerSelection === 'paper'){
        console.log("You lost this round")
        computerScore++
       }
       else if(computerSelection === 'scissors'){
        console.log("You won this round")
        playerScore++
       }
       else{
        console.log("Tie")
       }
   }
    //if player picks paper
    else if(playerSelection.toLowerCase() === 'paper'){
        if(computerSelection === 'scissors'){
            console.log("You lost this round")
            computerScore++ 
        }
        else if(computerSelection === 'rock'){
        console.log("You won this round")
            playerScore++
        }
        else{
            console.log("Tie")
        }
    }
    //if player picks scissors
    else if(playerSelection.toLowerCase() === 'scissors'){
        if(computerSelection === 'rock'){
            console.log("You lost this round")
            computerScore++
        }
        else if(computerSelection === 'paper'){
        console.log("You won this round")
            playerScore++
        }
        else{
            console.log("Tie")
        }
    }
    else{
        prompt('Rock, Paper, Scissors?')
    }
}
function game(){
    computerScore = 0
    playerScore = 0
    //play 5 rounds
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose Rock Paper or Scissors!');
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)
          
    }
    if(playerScore > computerScore){
        console.log('You win the game')
    }
    else if(playerScore < computerScore){
        console.log('You lose the game')
    }
    else if(playerScore === computerScore){
        console.log('Draw')
    }
}

game()  
