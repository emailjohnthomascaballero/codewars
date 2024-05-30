// Name Shuffler

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// function nameShuffler(str) {
//   return str.split(" ").reverse().join(" ");
// }

let nameShuffler = (str) => str.split(" ").reverse().join(" ");

console.log(nameShuffler("john McClane"));
