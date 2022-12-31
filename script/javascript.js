const choices = [
    'rock',
    'paper',
    'scissors'
]

function getComputerChoice(options) {
    return options[Math.floor(Math.random()*3)]
}

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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerPick = prompt("Please pick rock, paper or scissors");
        console.log(playRound(playerPick, getComputerChoice(choices)));
        let result = playRound(playerPick, getComputerChoice(choices));
        if (result === 'You lose! Paper beats rock') {
            computerScore++;
        } else if (result === 'You win! Rock beats scissors') {
            playerScore++;
        } else if (result === 'You win! Paper beats rock') {
            playerScore++;
        } else if (result === 'You lose! Scissors beats paper') {
            computerScore++;
        } else if (result === 'You lose! Rock beats scissors') {
            computerScore++;
        } else if (result === 'You win! Scissors beats paper') {
            playerScore++;
        } else {

        }
    }
    if (playerScore > computerScore) {
        console.log('You are the winner!')
    } else if (playerScore < computerScore) {
        console.log('The winner is the computer!')
    } else {
        console.log('Drawed!')
    }
}