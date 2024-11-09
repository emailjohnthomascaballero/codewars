// Kata Example Twist

// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites 1,000 times.

function loopCodewars() {
  var websites = [];
  for (let index = 0; index < 1_000; index++) {
    websites.push("codewars");
  }
  return websites;
}

console.log(loopCodewars());
