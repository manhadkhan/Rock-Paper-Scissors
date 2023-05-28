function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return "You Win! Rock beats Scissors";
        } else {
            return "You Lose! Paper beats Rock";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return "You Win! Scissors beats Paper";
        } else {
            return "You Lose! Rock beats Scissors";
        }
    }
}

function playRound() {
    const userChoice = prompt("Choose rock, paper or scissors:");
    // your code here
  }
  
  function game() {
    let score = 0;
    let result = "";
    result += playRound() === "win" ? "You won!" : "You lost!";
    console.log(result);
    score += result === "You won!" ? 1 : -1;
  
    result = "";
    result += playRound() === "win" ? "You won!" : "You lost!";
    console.log(result);
    score += result === "You won!" ? 1 : -1;
  
    result = "";
    result += playRound() === "win" ? "You won!" : "You lost!";
    console.log(result);
    score += result === "You won!" ? 1 : -1;
  
    result = "";
    result += playRound() === "win" ? "You won!" : "You lost!";
    console.log(result);
    score += result === "You won!" ? 1 : -1;
  
    result = "";
    result += playRound() === "win" ? "You won!" : "You lost!";
    console.log(result);
    score += result === "You won!" ? 1 : -1;
  
    if (score > 0) {
      console.log("You won!");
    } else if (score < 0) {
      console.log("You lost!");
    } else {
      console.log("It's a tie!");
    }
  }
  
  