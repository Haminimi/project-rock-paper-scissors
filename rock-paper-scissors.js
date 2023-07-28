const elements = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(elements) {
    const random = Math.floor(Math.random() * elements.length);
    return elements[random];
}

console.log(getComputerChoice(elements));