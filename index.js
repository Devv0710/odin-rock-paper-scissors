function getComputerChoice() {
  // Genera un numero aleatorio entre 0 y 2 (3 opciones)
  const randomNumber = Math.round(Math.random() * 2);
  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  const pSelection = playerSelection.toLowerCase();
  const cSelection = computerSelection.toLowerCase();

  switch (pSelection) {
    case "rock":
      switch (cSelection) {
        case "paper":
          return `You lose,${cSelection} baets ${pSelection}`;
        case "scissors":
          return `You win, ${pSelection} baets ${cSelection}`;
        default:
          return "Tie";
      }
    case "paper":
      switch (cSelection) {
        case "scissors":
          return `You lose,${cSelection} baets ${pSelection}`;
        case "rock":
          return `You win, ${pSelection} baets ${cSelection}`;
        default:
          return "Tie";
      }
    case "scissors":
      switch (cSelection) {
        case "rock":
          return `You lose,${cSelection} baets ${pSelection}`;
        case "paper":
          return `You win, ${pSelection} baets ${cSelection}`;
        default:
          return "Tie";
      }
    default:
      return "Enter valid option";
  }
}

function playGame(rounds = 3) {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < rounds; i++) {
    const playerSelection = prompt("Set your choice: Rock, Paper, Scissors");
    const computerSelection = getComputerChoice();

    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    if (roundResult.includes("You win")) {
      playerScore++;
    } else if (roundResult.includes("You lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    return `You win the game with ${playerScore} victories!`;
  } else if (computerScore > playerScore) {
    return `The computer wins the game with ${computerScore} victories!`;
  } else {
    return "It's a tie!";
  }
}

console.log(playGame(5));
