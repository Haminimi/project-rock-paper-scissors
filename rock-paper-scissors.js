const elements = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(elements) {
    const random = Math.floor(Math.random() * elements.length);
    return elements[random];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'Scissors') {
    const rockwin = ('You win! Rock beats Scissors!');
    return rockwin;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
        const rocklose = ('You lose! Paper beats Rock!');
        return rocklose;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Rock') {
        const rockdraw = ('Draw!')
        return rockdraw;
    } else if ( playerSelection.toLowerCase() === 'paper' && computerSelection === 'Paper') {
        const paperdraw = ('Draw!');
        return paperdraw;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
        const paperwin = ('You win! Paper beats Rock!');
        return paperwin;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
        const paperlose = ('You lose! Scissors beat Paper');
        return paperlose;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Scissors') {
        const scissorsdraw = ('Draw!');
        return scissorsdraw;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
        const scissorslose = ('You lose! Rock beats Scissors!');
        return scissorslose;
    } else (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper');
        const scissorswin = ('You win! Scissors beat Paper');
        return scissorswin;
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