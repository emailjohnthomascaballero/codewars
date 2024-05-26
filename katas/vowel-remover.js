// Vowel remover

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// function shortcut(string) {
//   return string
//     .split("")
//     .filter(
//       (word) =>
//         word !== "a" &&
//         word !== "e" &&
//         word !== "i" &&
//         word !== "o" &&
//         word !== "u"
//     )
//     .join("");
// }

let shortcut = (string) => string.split('').filter((word) => word !== 'a' && word !== 'e' && word !== 'i' && word !== 'o' && word !== 'u').join('');;

console.log(shortcut("hello"));
console.log(shortcut("codewars"));
console.log(shortcut("goodbye"));
console.log(shortcut("HELLO"));
