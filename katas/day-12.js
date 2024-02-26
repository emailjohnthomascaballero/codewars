// Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let myArray = str.split('').reverse().join('');
  return myArray.split(' ').reverse().join(' ');
}

console.log(reverseWords("double spaces"));

// psudo code

// convert each letters to array
// reverse each letters
// join array

// convert each word to array
// reverse array
// join array