// Who is going to pay for the wall?

// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"

function whoIsPaying(name) {
  let nameArray = name.split("");
  let lastNameArray = [];

  if (nameArray.length > 2) {
    lastNameArray.push(nameArray[0] + nameArray[1]);
  } else if (nameArray.length == 1) {
    lastNameArray.push(name);
  } else {
    lastNameArray.push(name);
  }

  let nameArray2 = name.split(" ");
  if (nameArray.length > 2) {
    return nameArray2.concat(lastNameArray);
  } else if (nameArray.length == 1) {
    return nameArray2;
  } else {
    return nameArray2;
  }
}

console.log(whoIsPaying("Ryan"));
console.log(whoIsPaying("Me"));
console.log(whoIsPaying(""));
console.log(whoIsPaying("I"));
