// Invert values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

// You can assume that all values are integers. Do not mutate the input array.

function invert(array) {
  // return -Math.abs(array);
  // return array.map(x => -Math.abs(x));
  return array.map(x => 
    x < 0 ? Math.abs(x) : x == 0 ? x : -Math.abs(x)
  );
}

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));
console.log(invert([]));
console.log(invert([0]));