
let  computerScore = 0
let  playerScore = 0

//funtion for random computation from computer
function computerPlay () {
let computerPick = ["rock","paper","scissors"];
let randComputerPick = computerPick[Math.floor(Math.random() * computerPick.length)]
return randComputerPick
}

//game function
function playRound(playerSelection, computerSelection) {
    
   //if player picks rock
   if(playerSelection.toLowerCase() === 'rock'){
       if(computerSelection === 'paper'){
        const p = document.createElement('p')
        p.innerText = "You lost this round"
        outcome.appendChild(p);
        computerScore++
       }
       else if(computerSelection === 'scissors'){
        const p = document.createElement('p')
        p.innerText = "You won this round"
        outcome.appendChild(p);
        playerScore++
       }
       else{
        const p = document.createElement('p')
        p.innerText = "Tie"
        outcome.appendChild(p);
       }
   }

    //if player picks paper
    else if(playerSelection.toLowerCase() === 'paper'){
        if(computerSelection === 'scissors'){
            const p = document.createElement('p')
            p.innerText = "You lost this round"
            p.backgroundColor = "red";
            outcome.appendChild(p);
            computerScore++ 
        }
        else if(computerSelection === 'rock'){
            const p = document.createElement('p')
            p.innerText = "You won this round"
            p.backgroundColor = "green";
            outcome.appendChild(p);
            playerScore++
        }
        else{
            const p = document.createElement('p')
            p.innerText = "Tie"
            outcome.appendChild(p);
         
        }
    }

    //if player picks scissors
    else if(playerSelection.toLowerCase() === 'scissors'){
        if(computerSelection === 'rock'){
            const p = document.createElement('p')
            p.innerText = "You lost this round"
            outcome.appendChild(p);
            computerScore++
        }

        else if(computerSelection === 'paper'){
            const p = document.createElement('p')
            p.innerText = "You won this round"
            outcome.appendChild(p);
            playerScore++
        }

        else{
            const p = document.createElement('p')
            p.innerText = "Tie"
            outcome.appendChild(p);
         
        }
    }
}

//functions to print the winner of the game
const checkWinner = (playerScore,computerScore) => {
    if(playerScore === 5){
    const finalScore = document.querySelector('.finalScore')
    const p = document.createElement('p');
    p.innerText = `You Won the Game. 
    Your Score = ${playerScore} Computer Score = ${computerScore}.
    Please click the Restart button to play another game.`
    const divColor = finalScore.style.backgroundColor = "green";
    finalScore.appendChild(p);
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
    } 

    if(computerScore === 5){
    const finalScore = document.querySelector('.finalScore')
    const p = document.createElement('p');
    p.innerText = `You Lost the Game.
    Your Score = ${playerScore} Computer Score = ${computerScore}.
    Please click the Restart button to play another game.`
    const divColor = finalScore.style.backgroundColor = "red";
    finalScore.appendChild(p);
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
    }
    }

 //button configuration
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissors');
const outcome = document.querySelector('.outcome')


   rockButton.addEventListener('click',() => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection,computerSelection);
    checkWinner(playerScore,computerScore)
    })


   paperButton.addEventListener('click',() => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection,computerSelection);
    checkWinner(playerScore,computerScore)
    })

   scissorButton.addEventListener('click',() => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection,computerSelection);
    checkWinner(playerScore,computerScore)
    })

