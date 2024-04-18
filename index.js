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

console.log(getComputerChoice());
