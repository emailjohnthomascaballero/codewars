// Reversed sequence

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
  let arr = [];
  for (let index = 1; index <= n; index++) {
    arr.push(index);
  }
  return arr.reverse();
};

console.log(reverseSeq(5));
