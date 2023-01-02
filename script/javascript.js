const choices = [
    'rock',
    'paper',
    'scissors'
]

function getComputerChoice(options) {
    return options[Math.floor(Math.random()*3)]
}

let playerPick = '';
let rockButton = document.querySelector('.rockbutton');
let paperButton = document.querySelector('.paperbutton');
let scissorButton = document.querySelector('.scissorsbutton');

rockButton.addEventListener('click', () => {
        playerPick = choices[0];
        console.log(playRound(playerPick, getComputerChoice(choices)));
});

paperButton.addEventListener('click', () => {
        playerPick = choices[1];
        console.log(playRound(playerPick, getComputerChoice(choices)));
})

scissorButton.addEventListener('click', () => {
        playerPick = choices[2];
        console.log(playRound(playerPick, getComputerChoice(choices)));
})

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                return 'Draw!';
            } else if (computerSelection === 'paper') {
                return 'You lose! Paper beats rock';
            } else {
                return 'You win! Rock beats scissors';
            }
            break;
        
        case 'paper':
            if (computerSelection === 'rock') {
                return 'You win! Paper beats rock';
            } else if (computerSelection === 'paper') {
                return 'Draw!';
            } else {
                return 'You lose! Scissors beats paper';
            }
            break;

        case 'scissors':
            if (computerSelection === 'rock') {
                return 'You lose! Rock beats scissors';
            } else if (computerSelection === 'paper') {
                return 'You win! Scissors beats paper';
            } else {
                return 'Draw!';
            }
            break;
        
        default:
            return 'Please pick one';
    }
}