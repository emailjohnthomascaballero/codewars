// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  // console.log(p1, p2);
  // let p1Move = p1;
  // let p2Move = p2;

  if (p1 == "scissors") {
    if (p2 == "paper") {
      return "Player 1 won!";
    } else if (p2 == "rock") {
      return "Player 2 won!";
    } else if (p2 == "scissors") {
      return "Draw!";
    }
  } else if (p1 == "paper") {
    if (p2 == "rock") {
      return "Player 1 won!";
    } else if (p2 == "scissors") {
      return "Player 2 won!";
    } else if (p2 == "paper") {
      return "Draw!";
    }
  } else if (p1 == "rock") {
    if (p2 == "scissors") {
      return "Player 1 won!";
    } else if (p2 == "paper") {
      return "Player 2 won!";
    } else if (p2 == "rock") {
      return "Draw!";
    }
  }
};

console.log(rps("scissors", "paper"));
console.log(rps("scissors", "rock"));
console.log(rps("scissors", "scissors"));

console.log(rps("paper", "paper"));
console.log(rps("paper", "rock"));
console.log(rps("paper", "scissors"));

console.log(rps("rock", "paper"));
console.log(rps("rock", "rock"));
console.log(rps("rock", "scissors"));
