// Array plus array

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// function arrayPlusArray(arr1, arr2) {
//   return arr1.reduce((total, num) => total + num) + arr2.reduce((total, num) => total + num); 
// }

const arrayPlusArray = (arr1, arr2) => arr1.reduce((total, num) => total + num) + arr2.reduce((total, num) => total + num);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
