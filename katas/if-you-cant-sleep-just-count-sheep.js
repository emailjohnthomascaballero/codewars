// If you can't sleep, just count sheep!!

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  const sheep = [];
  for (let index = 0; index < num; index++) {
    // const element = sheep[index];
    sheep.push(`${index + 1} sheep...`);
  }
  return sheep.join("");
};

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(3));
