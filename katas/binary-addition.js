// Binary Addition

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// my first answer but it's not working
// function addBinary(a, b) {
//   // convert decimal to binary
//   let binaryOne = (a >>> 0).toString(2);
//   let binaryTwo = (b >>> 0).toString(2);
//   // add binary
//   return (parseInt(binaryOne, 2) + parseInt(binaryTwo, 2)).toString(2);
// }

// console.log(addBinary(1, 1));
// console.log(addBinary(5, 9));
// // check if string
// console.log(typeof addBinary(5, 9));

// my second answer but its working!
// function addBinary(a, b) {
//   let add = a + b;
//   return add.toString(2);
// }

// my third answer but in shorter way
// function addBinary(a, b) {
//   return (a + b).toString(2);
// }

// my final answer one line code
addBinary = (a, b) => (a + b).toString(2);

console.log(addBinary(1, 1))
console.log(addBinary(5, 9))