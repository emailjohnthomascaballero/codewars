// Parse nice int from char problem

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString) {
  // return `${inputString} ${Math.floor(Math.random() * 9)}`;
  // return `${inputString} ${Math.floor(Math.random() * 10)} years old`;
  // return `${Math.floor(Math.random() * 10)} years old`;
  // return typeof Math.floor(Math.random() * 10);
  // return 4;
  // return `${inputString} ${Math.floor(Math.random() * 10)} years old`;
  return parseInt(inputString.charAt(0));
  // return the girl's correct age as an integer. Happy coding :)
}

console.log(getAge("4 years old"))