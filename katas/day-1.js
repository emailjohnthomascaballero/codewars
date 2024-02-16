// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  let text = name;
  let firstLetter = text.slice(0,1);
  // console.log(firstLetter);
  if (firstLetter === 'r') {
    return name + ' plays banjo';
  } else if (firstLetter === 'R') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }

}

// let text = "John.Smith";
// let result = text.slice(0, 4);
// console.log(result);

console.log(areYouPlayingBanjo('Ruddy'));
