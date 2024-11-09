// Triple Trouble

// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three) {
  let word = "";
  for (let index = 0; index < one.length; index++) {
    let eachWord = one.charAt(index) + two.charAt(index) + three.charAt(index);
    word += eachWord;
  }
  return word;
}

console.log(tripleTrouble("aa", "bb", "cc"));
console.log(tripleTrouble("aaaaaa", "bbbbbb", "cccccc"));
console.log(tripleTrouble("burn", "reds", "roll"));
console.log(tripleTrouble("Sea", "urn", "pms"));
console.log(tripleTrouble("LLh", "euo", "xtr"))