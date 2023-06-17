const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');
const resultElement = document.createElement('div');
const scoreElement = document.createElement('div');

resultElement.classList.add('result');
scoreElement.classList.add('score');

document.body.appendChild(resultElement);
document.body.appendChild(scoreElement);

let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

function playRound(playerSelection) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  let result;

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    result = 'You win!';
    playerScore++;
  } else {
    result = 'You lose!';
    computerScore++;
  }

  resultElement.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. ${result}`;

  scoreElement.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    announceWinner();
    resetScore();
  }
}

function announceWinner() {
  let winner;
  if (playerScore === computerScore) {
    winner = "It's a tie!";
  } else if (playerScore > computerScore) {
    winner = 'You win the game!';
  } else {
    winner = 'Computer wins the game!';
  }

  const winnerMessage = document.createElement('p');
  winnerMessage.textContent = `Game Over. ${winner}`;
  resultElement.appendChild(winnerMessage);
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}
