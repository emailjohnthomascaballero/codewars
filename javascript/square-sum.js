// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1² + 2² + 2² = 9.

function squareSum(numbers) {
  // square each number
  let newArr = numbers.flatMap((num) => num ** 2);
  let sum = 0;

  // sums the result
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }

  return sum;
}

console.log(squareSum([1, 2, 2]));
console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));
