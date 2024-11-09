// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// Formula:
// Add up all of the numbers and then divide by how many numbers there are.

function findAverage(array) {
  if (array.length != 0) {
    let total = 0;
    array.map((num) => (total += num));
    return total / array.length;
  } else {
    return 0;
  }
}

console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage([1, 3, 5, 7, 8, 10]));
console.log(findAverage([]));
