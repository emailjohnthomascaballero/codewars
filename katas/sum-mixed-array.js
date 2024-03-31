// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
  // return x.reduce((a, b) => parseInt(a) + parseInt(b));
  let total = 0;
  x.map( num => {
    if (typeof num === 'number') {
      total += num;
    } else {
      total += parseInt(num);
    }
  } );
  return total;
}

console.log(sumMix([9, 3, '7', '3']));