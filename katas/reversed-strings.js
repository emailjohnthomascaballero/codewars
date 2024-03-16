// Reversed Strings

const { reverse } = require("dns");

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// SOLUTION 1
// function solution(str){
//   let split = str.split('');
//   let reverse = split.reverse();
//   return reverse.join('');
// }

// SOLUTION 2
// function solution(str){
//   return str.split('').reverse().join('');
// }

// FINAL SOLUTION
let solution = (str) => str.split('').reverse().join('');

console.log(solution("world"));
console.log(solution("word"));