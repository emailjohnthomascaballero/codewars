// get ascii value of character

// Get ASCII value of a character.

// For the ASCII table you can refer to http://www.asciitable.com/

function getASCII(c) {
  return Number(
    c
      .split("")
      .map((char) => char.charCodeAt(0))
      .join("")
  );
}

console.log(getASCII(" "));

// console.log("A".charCodeAt(0));
