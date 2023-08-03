const elements = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(elements) {
    const random = Math.floor(Math.random() * elements.length);
    return elements[random];
}


function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
      return `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
  }

  

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <=5; round++) {
        const playerSelection = prompt('Rock, Paper or Scissors? ');

        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            console.log('Invalid choice. Please choose again.');
            round--;
            continue;
        }

        const computerSelection = getComputerChoice(elements);
        console.log(`Computer chooses: ${computerSelection}`);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('win')) {
            playerScore++;
        }   else if (result.includes('lose')) {
            computerScore++;
        }
    }

    console.log(`Final score - You: ${playerScore}, Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log('Congratulations! You are the winner!');
    }   else if (playerScore < computerScore) {
        console.log('You lost! Better luck next time.');
    }   else {
        console.log('It\'s a tie! The game ends in a draw.')
    }
}

game();