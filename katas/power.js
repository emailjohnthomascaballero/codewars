// Power

// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

// Note: Math.pow and some other Math functions like eval() and ** are disabled.

// function numberToPower(number, power){
//   return number**power;
// }

const numberToPower = (number, power) => number ** power;

console.log(numberToPower(4, 2));
console.log(numberToPower(10, 3));
