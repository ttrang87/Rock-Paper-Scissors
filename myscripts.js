function getComputerChoice() {
    pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random()*3)]
}

function getHumanChoice() {
    return prompt('Choose: ').toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore += 1;
        return "You lose! Paper beats Rock";
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        computerScore += 1;
        return "You lose! Scissors beats paper";
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore += 1;
        return "You lose! Rock beats scissors";
    } else if (humanChoice == computerChoice) {
        return "Tie";
    } else {
        humanScore += 1;
        return "You win";
    }
}
let humanScore = 0;
let computerScore = 0;
function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(humanChoice, computerChoice);
        console.log(playRound(humanChoice, computerChoice));
    }
}

playGame();

console.log(humanScore);
console.log(computerScore)