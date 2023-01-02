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
let yourScore = document.querySelector('.yourscore');
let pcScore = document.querySelector('.computerscore');
let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => {
        playerPick = choices[0];
        roundWinner.textContent = playRound(playerPick, getComputerChoice(choices));
        if (roundWinner.textContent === 'You lose! Paper beats rock') {
            computerScore++;
            pcScore.textContent = `Computer Score: ${computerScore}`;
        } else if (roundWinner.textContent === 'You win! Rock beats scissors') {
            playerScore++;
            yourScore.textContent = `Computer Score: ${playerScore}`;
        } else if (roundWinner.textContent === 'You win! Paper beats rock') {
            playerScore++;
            yourScore.textContent = `Computer Score: ${playerScore}`;
        } else if (roundWinner.textContent === 'You lose! Scissors beats paper') {
            computerScore++;
            pcScore.textContent = `Computer Score: ${computerScore}`;
        } else if (roundWinner.textContent === 'You lose! Rock beats scissors') {
            computerScore++;
            pcScore.textContent = `Computer Score: ${computerScore}`;
        } else if (roundWinner.textContent === 'You win! Scissors beats paper') {
            playerScore++;
            yourScore.textContent = `Computer Score: ${playerScore}`;
        } else {
        }
        if (playerScore === 5) {
            yourScore.textContent = `Computer Score: ${playerScore}`;
            alert('You win!');
            playerScore = 0;
            computerScore = 0;
            yourScore.textContent = `Computer Score: ${playerScore}`;
            pcScore.textContent = `Computer Score: ${computerScore}`;
        }
        if (computerScore === 5) {
            pcScore.textContent = `Computer Score: ${computerScore}`;
            alert('The computer wins!');
            playerScore = 0;
            computerScore = 0;
            yourScore.textContent = `Computer Score: ${playerScore}`;
            pcScore.textContent = `Computer Score: ${computerScore}`;
        }
});

paperButton.addEventListener('click', () => {
        playerPick = choices[1];
        roundWinner.textContent = playRound(playerPick, getComputerChoice(choices));
        if (roundWinner.textContent === 'You lose! Paper beats rock') {
            computerScore++;
            pcScore.textContent = `Computer Score: ${computerScore}`;
        } else if (roundWinner.textContent === 'You win! Rock beats scissors') {
            playerScore++;
            yourScore.textContent = `Computer Score: ${playerScore}`;
        } else if (roundWinner.textContent === 'You win! Paper beats rock') {
            playerScore++;
            yourScore.textContent = `Computer Score: ${playerScore}`;
        } else if (roundWinner.textContent === 'You lose! Scissors beats paper') {
            computerScore++;
            pcScore.textContent = `Computer Score: ${computerScore}`;
        } else if (roundWinner.textContent === 'You lose! Rock beats scissors') {
            computerScore++;
            pcScore.textContent = `Computer Score: ${computerScore}`;
        } else if (roundWinner.textContent === 'You win! Scissors beats paper') {
            playerScore++;
            yourScore.textContent = `Computer Score: ${playerScore}`;
        } else {
        }
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
            pcScore.textContent = `Computer Score: ${computerScore}`;
        } else if (roundWinner.textContent === 'You win! Rock beats scissors') {
            playerScore++;
            yourScore.textContent = `Computer Score: ${playerScore}`;
        } else if (roundWinner.textContent === 'You win! Paper beats rock') {
            playerScore++;
            yourScore.textContent = `Computer Score: ${playerScore}`;
        } else if (roundWinner.textContent === 'You lose! Scissors beats paper') {
            computerScore++;
            pcScore.textContent = `Computer Score: ${computerScore}`;
        } else if (roundWinner.textContent === 'You lose! Rock beats scissors') {
            computerScore++;
            pcScore.textContent = `Computer Score: ${computerScore}`;
        } else if (roundWinner.textContent === 'You win! Scissors beats paper') {
            playerScore++;
            yourScore.textContent = `Computer Score: ${playerScore}`;
        } else {
        }
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