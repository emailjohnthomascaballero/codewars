// super-duper-easy

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
  // return x * 50 + 6
  return x = typeof(x) == "number" ? x * 50 + 6 : "Error"
}

console.log(problem(6));
console.log(problem("asdf"));