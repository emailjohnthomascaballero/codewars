// A Needle in the Haystack

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

// Note: In COBOL, it should return "found the needle at position 6"

function findNeedle(haystack) {
  // haystack.forEach((item, index) => {
  //   console.log(item, index);

  // });
  for (let i = 0; i < haystack.length; i++) {
    const element = haystack[i];
    // console.log(element);
    if (element == "needle") {
      return `found the needle at position ${i}`;
    } else {
      continue;
    }
  }
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
// findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);

// console.log(
//   findNeedle(["needle", "junk", "hay", "hay", "moreJunk", "hay", "needle"])
// );
