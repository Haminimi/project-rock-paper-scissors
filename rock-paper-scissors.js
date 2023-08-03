const rockButton = document.getElementById('Rock');
const paperButton = document.getElementById('Paper');
const scissorsButton = document.getElementById('Scissors');
const resultsDiv = document.getElementById('results');
const scorePara = document.getElementById('scorePara');
const winner = document.getElementById('winner');

rockButton.addEventListener('click', () => playRound('Rock'));
paperButton.addEventListener('click', () => playRound('Paper'));
scissorsButton.addEventListener('click', () => playRound('Scissors'));


const elements = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice(elements) {
    const random = Math.floor(Math.random() * elements.length);
    return elements[random];
}


function playRound(playerSelection) {
    const computerSelection = getComputerSelection();
    const result = determineWinner(playerSelection, computerSelection);
    updateResults(result);
}


function updateResults(result) {
    resultsDiv.textContent = `${result}\n`;
}


function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        playerScore++;
        updateScore();
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        updateScore();
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

let playerScore = 0;
let computerScore = 0;

function updateScore() {
    scorePara.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    if (playerScore === 5) {
        winner.textContent = "Congratulations! You are the winner!";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    } else if (computerScore === 5) {
        winner.textContent = "You lost! Better luck next time.";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}