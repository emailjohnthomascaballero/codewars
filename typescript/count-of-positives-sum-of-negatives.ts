// Count of positives / sum of negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example:

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

export function countPositivesSumNegatives(input: any) {
  // throw new Error('The method or operation is not implemented.');
  if (input === null || input.length == 0) {
    return [];
  } else if (input.filter((item: number) => item < 0).length == 0)
    return [input.length, 0];
  else {
    let positiveNumbers = input.filter((item: number) => item > 0).length;
    let negativeNumbers = input
      .filter((item: number) => item < 0)
      .reduce(
        (accumulator: number, currentValue: number) =>
          accumulator + currentValue
      );
    return negativeNumbers !== null
      ? [positiveNumbers, negativeNumbers]
      : [positiveNumbers];
  }
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
console.log(countPositivesSumNegatives(null));
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //error cannot sum negative numbers
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);

// expected [] to deeply equal [ 50, +0 ]
