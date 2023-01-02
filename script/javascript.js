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
let roundWinner = document.querySelector('.roundwinner');
let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => {
        playerPick = choices[0];
        roundWinner.textContent = playRound(playerPick, getComputerChoice(choices));
        if (roundWinner.textContent === 'You lose! Paper beats rock') {
            computerScore++;
        } else if (roundWinner.textContent === 'You win! Rock beats scissors') {
            playerScore++;
        } else if (roundWinner.textContent === 'You win! Paper beats rock') {
            playerScore++;
        } else if (roundWinner.textContent === 'You lose! Scissors beats paper') {
            computerScore++;
        } else if (roundWinner.textContent === 'You lose! Rock beats scissors') {
            computerScore++;
        } else if (roundWinner.textContent === 'You win! Scissors beats paper') {
            playerScore++;
        } else {
        }
        console.log(playerScore);
        console.log(computerScore);
        if (playerScore === 5) {
            alert('You win!');
            playerScore = 0;
            computerScore = 0;
        }
        if (computerScore === 5) {
            alert('The computer wins!');
            playerScore = 0;
            computerScore = 0;
        }
});

paperButton.addEventListener('click', () => {
        playerPick = choices[1];
        roundWinner.textContent = playRound(playerPick, getComputerChoice(choices));
        if (roundWinner.textContent === 'You lose! Paper beats rock') {
            computerScore++;
        } else if (roundWinner.textContent === 'You win! Rock beats scissors') {
            playerScore++;
        } else if (roundWinner.textContent === 'You win! Paper beats rock') {
            playerScore++;
        } else if (roundWinner.textContent === 'You lose! Scissors beats paper') {
            computerScore++;
        } else if (roundWinner.textContent === 'You lose! Rock beats scissors') {
            computerScore++;
        } else if (roundWinner.textContent === 'You win! Scissors beats paper') {
            playerScore++;
        } else {
        }
        console.log(playerScore);
        console.log(computerScore);
        if (playerScore === 5) {
            alert('You win!');
            playerScore = 0;
            computerScore = 0;
        }
        if (computerScore === 5) {
            alert('The computer wins!');
            playerScore = 0;
            computerScore = 0;
        }
});

scissorButton.addEventListener('click', () => {
        playerPick = choices[2];
        roundWinner.textContent = playRound(playerPick, getComputerChoice(choices));
        if (roundWinner.textContent === 'You lose! Paper beats rock') {
            computerScore++;
        } else if (roundWinner.textContent === 'You win! Rock beats scissors') {
            playerScore++;
        } else if (roundWinner.textContent === 'You win! Paper beats rock') {
            playerScore++;
        } else if (roundWinner.textContent === 'You lose! Scissors beats paper') {
            computerScore++;
        } else if (roundWinner.textContent === 'You lose! Rock beats scissors') {
            computerScore++;
        } else if (roundWinner.textContent === 'You win! Scissors beats paper') {
            playerScore++;
        } else {
        }
        console.log(playerScore);
        console.log(computerScore);
        if (playerScore === 5) {
            alert('You win!');
            playerScore = 0;
            computerScore = 0;
        }
        if (computerScore === 5) {
            alert('The computer wins!');
            playerScore = 0;
            computerScore = 0;
        }
});

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