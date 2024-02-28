// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// SOLUTION 1:
// function findShort(s) {
//   if (s) {
//     // let stringArray = s.match(/\b(\w+)\b/g);
//     let stringArray = s.match(/\S+/g);
//     // return stringArray;
//     let element = [];

//     for (let i = 0; i < stringArray.length; i++) {
//       element.push(stringArray[i].length);
//     }
//     // return element;

//     return Math.min(...element);
//   }
// }

// FINAL SOLUTION
function findShort(s) {
  // assign every word in an array
    let stringArray = s.match(/\S+/g);
  // return length of the shortest word
    let element = [];
    for (let i = 0; i < stringArray.length; i++) {
      element.push(stringArray[i].length);
    }
    return Math.min(...element);
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));
console.log(findShort("Let's travel abroad shall we"));
