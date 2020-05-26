const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log("The input is invalid!");
  }
};

const getComputerChoice = () => {
  randomChoice = Math.floor(Math.random() * 3);
  return ["rock", "paper", "scissors"][randomChoice];
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === "bomb") {
    return "You won by cheating!"
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "You lost!";
    } else { return "You won!"; }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You lost!";
    } else { return "You won!"; }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lost!";
    } else { return "You won!"; }
  }
}

const playGame = () => {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice} and your opponent chose ${computerChoice}.`)
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()
