// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  // return arr.reduce( (x, y) => x + y)
  // return arr.filter((x) => x > 0).reduce((x, y) => x + y);
  // return arr.length ? arr.filter((x) => x > 0).reduce((x, y) => x + y) : 0;
  let newArr = arr.length ? arr.filter((x) => x > 0) : 0;
  return newArr.length ? newArr.reduce((x, y) => x + y) : 0;
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));