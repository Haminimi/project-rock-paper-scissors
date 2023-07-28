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

const playerSelection = 'Rock';
const computerSelection = getComputerChoice(elements);
console.log(playRound(playerSelection, computerSelection));
