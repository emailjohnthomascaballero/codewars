// The Feast of Many Beasts

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// Community Tips:
// The description is poorly written. Here is what they want: first letter of beast name equals first letter of dish name last letter of beast name equals last letter of dish name

function feast(beast, dish) {
  let beastResult = beast.split("").toString().toLowerCase().split("");
  const beastLast = beastResult[beastResult.length - 1];
  const beastFirst = beastResult[0];

  let dishResult = dish.split("").toString().toLowerCase().split("");
  const dishLast = dishResult[dishResult.length - 1];
  const dishFirst = dishResult[0];

  return dishFirst === beastFirst && beastLast === dishLast;
}

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));
