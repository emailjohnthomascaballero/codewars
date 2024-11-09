// String cleaning

// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s) {
  let arr = s.split("");
  let emptyArr = [];
  arr.map((char) => {
    char === "0" ||
    char === "1" ||
    char === "2" ||
    char === "3" ||
    char === "4" ||
    char === "5" ||
    char === "6" ||
    char === "7" ||
    char === "8" ||
    char === "9"
      ? ""
      : emptyArr.push(char);
  });
  return emptyArr.join("");
}

console.log(stringClean(""));
console.log(stringClean("! !"));
console.log(stringClean("123456789"));
console.log(stringClean("(E3at m2e2!!)"));
console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"))