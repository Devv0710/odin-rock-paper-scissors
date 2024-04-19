const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win";
  } else {
    return "You lose";
  }
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();
  const winner = determineWinner(playerChoice, computerChoice);

  if (winner === "Tie") {
    return "It's a tie!";
  } else if (winner === "You win") {
    return `${winner}, ${playerChoice} beats ${computerChoice}`;
  } else {
    return `${winner}, ${computerChoice} beats ${playerChoice}`;
  }
}

function playGame(rounds = 5) {
  const display = document.querySelector(".display");
  const btns = document.querySelectorAll(".btn");
  const userScore = document.querySelector(".userScore")
  const cmpScore = document.querySelector(".computerScore")
  const userChoice = document.querySelector(".userChoice")
  const computerChoice = document.querySelector(".computerChoice")

  let playerScore = 0;
  let computerScore = 0;

  function resetScores() {
    playerScore = 0;
    computerScore = 0;
    display.textContent = "";
    userScore.textContent = ""
    cmpScore.textContent = ""
    userChoice.textContent = ""
    computerChoice.textContent = ""
  }

  function updateScores(winner) {
    if (winner.includes("You win")) {
      playerScore++;
      userScore.textContent = playerScore
    } else if (winner.includes("You lose")) {
      computerScore++;
      cmpScore.textContent = computerScore
    }

  }

  function updateChoices(playerSelection, computerSelection) {
    userChoice.textContent = playerSelection
    computerChoice.textContent = computerSelection
  }

  function displayWinner() {
    if (playerScore > computerScore) {
      display.textContent = `You win the game with ${playerScore} victories!`;
    } else if (computerScore > playerScore) {
      display.textContent = `The computer wins the game with ${computerScore} victories!`;
    } else {
      display.textContent = "It's a tie!";
    }
  }

  function handleClick(playerChoice) {
    const computerChoice = getComputerChoice();
    updateChoices(playerChoice, computerChoice)
    const result = playRound(playerChoice, computerChoice);
    updateScores(result);
    display.textContent = result;
    if (playerScore >= rounds || computerScore >= rounds) {
      displayWinner();
      setTimeout(resetScores, 5000)
    }
  }

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      handleClick(btn.dataset.choice);
    });
  });
}

playGame();
