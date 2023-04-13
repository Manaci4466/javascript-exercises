function computerSelection() {

   computerChoice = Math.random();
    if (0 < computerChoice < 0.33) {
        computerChoice = "rock";
    }
    else if (0.34 < computerChoice < 0.66) {
        computerChoice = "paper";
    } 
    else {
        computerChoice = "scissors";
    }

    return computerChoice;
}


function playRound(playerSelection,computerSelection) {


        if (choice1 === choice2) {
            return "The result is a tie!"
        }
        else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "rock wins"
            }
            else {
                return "paper wins"
            }
        }     
        else if (choice1 === "paper") {
            if (choice2 === "rock") {
            return "paper wins"
            }
            else {
                return "scissors wins"
            }
        }
  

}

var prompt = window.prompt("choos Rock, Paper or Scissors").toUpperCase();
var computerSelection = computerSelection();
console.log(playRound(prompt,computerSelection))
