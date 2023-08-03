const rockButton = document.getElementById('Rock');
const paperButton = document.getElementById('Paper');
const scissorsButton = document.getElementById('Scissors');
const resultsDiv = document.getElementById('results');
const scorePara = document.getElementById('scorePara');
const winner = document.getElementById('winner');

const elements = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice(elements) {
    const random = Math.floor(Math.random() * elements.length);
    return elements[random];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return 'It\'s a tie!';
    } else if (
      (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'Paper' && computerSelection === 'Rock') ||
      (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }