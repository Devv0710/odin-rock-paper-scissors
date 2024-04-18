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

const playerSelection = "Paper";
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
