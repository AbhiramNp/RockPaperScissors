
let playerScore = 0;
let computerScore = 0;
function computerChoice(){
    
    let choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
    }

function playerChoice(){
    playerchoice = prompt("Enter your Choice:");
    return playerchoice;
}
function playerRound()
{
   let playerSelection = playerChoice();
   let computerSelection = computerChoice();
   

   if(playerSelection == computerSelection){
    console.log("It's a tie");
}
   else if(playerSelection =="rock" && computerSelection == "scissors"||
           playerSelection =="scissors" && computerSelection == "paper"||
           playerSelection =="paper" && computerSelection == "rock")
           {
            console.log("You won this round");
            playerScore += 1;
            if(playerScore == 5){
                console.log("You won the match");
            }
}
else {
    console.log("Computer won this round");
    computerScore +=1;
    if(computerScore == 5){
        console.log("Computer won the match.Try again");
    }
}

}
playerRound();