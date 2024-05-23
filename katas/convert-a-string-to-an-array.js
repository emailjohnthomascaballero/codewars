// Convert a string to an array

// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

let stringToArray = (string) => string.split(" ");

console.log(stringToArray("Robin Singh"));
console.log(stringToArray("I love arrays they are my favorite"))