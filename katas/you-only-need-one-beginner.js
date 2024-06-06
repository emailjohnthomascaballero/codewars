// You only need one - Beginner

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// METHOD 1
function check(a, x) {
  return a.includes(x);
}

// METHOD 2
// function check(a, x) {
//   return a.map(a => a === x).includes(true);
// }

console.log(check([66, 101], 66));
console.log(check([101, 45, 75, 105, 99, 107], 107));
console.log(check(['t', 'e', 's', 't'], 'e'));
console.log(check(['what', 'a', 'great', 'kata'], 'kat'));