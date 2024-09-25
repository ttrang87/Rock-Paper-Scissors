let humanScore = 0;
let computerScore = 0;
let gameOver = false;  // Flag to stop the game when someone wins

function getComputerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = document.querySelector("#choice");
    choice.addEventListener("click", (event) => {
        if (gameOver) return;  // Stop the game if it's over

        let humanChoice = event.target.id;
        let computerChoice = getComputerChoice();
        
        let result = playRound(humanChoice, computerChoice);

        document.querySelector("#human").textContent = 'Humanscore is: ' + humanScore;
        document.querySelector("#computer").textContent = 'Computerscore is: ' + computerScore;
        document.querySelector("#result").textContent = result;

        // Check if someone has won after each round
        if (humanScore === 5) {
            gameOver = true;  // Set flag to prevent further input
            document.querySelector("#final").textContent = "Game over! You win";
        } else if (computerScore === 5) {
            gameOver = true;  // Set flag to prevent further input
            document.querySelector("#final").textContent = "Game over! You lose";
        }
    });
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        return "You lose! Paper beats Rock";
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
        return "You lose! Scissors beats Paper";
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore += 1;
        return "You lose! Rock beats Scissors";
    } else if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else {
        humanScore += 1;
        return "You win a score!";
    }
}

// Start the game
getHumanChoice();
