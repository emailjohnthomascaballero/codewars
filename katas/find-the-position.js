// Find the position!

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter) {
  let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  return `Position of alphabet: ${arr.indexOf(letter) + 1}`;
}

console.log(position("a"));
console.log(position("z"));
console.log(position("e"));