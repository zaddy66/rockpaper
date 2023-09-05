console.log('hi');

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput ==="bomb" ) {
    return userInput;
  } else {
    console.log("Type valid item");
  }
}

//getUserChoice("SCISSORS");

const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
    case 0:
    return "rock";
    break;
    case 1:
    return "paper";
    break;
    case 2:
    return "scissors";
    break;
    default:
    console.log("getting error");
    break;

  }

}

//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return "the game is tie";
  } else  if (userChoice === "rock") {
    if(computerChoice === "paper") {
      return "computer has won";
    } else {
      return "user has won"
      }
  } else if( userChoice === "paper" ) {
    if(computerChoice === "scissors") {
      return "computer has won";
    } else { 
        return "user has won"
      }
  } else if (userChoice === "scissors") {
    if(computerChoice === "rock") {
      return "computer has won"
    } else { 
      return "user has won"
      }
  } else if(userChoice === "bomb") {
    return "user Killed it."
  }
 
}

const playGame = () => {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log( determineWinner(userChoice, computerChoice));
}

playGame();
//console.log(determineWinner("paper", "rock"));
//console.log(determineWinner("scissors", "rock"));





















