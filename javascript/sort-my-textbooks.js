// Sort My Textbooks

// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

function sorter(textbooks) {
  
  return textbooks.sort((a, b) => {
    const nameA = a.toUpperCase(); // ignore upper and lowercase
    const nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

}

// const sorter = (textbooks) => textbooks.sort();

console.log(sorter(["Maths", "English", "History", "Geography", "Chemistry"]));
console.log(sorter([ 'Algebra', 'Geometry', 'english', 'history' ]));