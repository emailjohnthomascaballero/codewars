// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

export class Challenge {
  static solution(number: number) {
    let arrThree = [0];
    let arrFive = [0];
    if (number < 0) {
      return 0;
    } else {
      for (let index = 3; index < number; index += 3) {
        arrThree.push(index);
      }

      for (let index = 5; index < number; index += 5) {
        arrFive.push(index);
      }

      // return (
      //   arrThree.reduce((accumulator, current) => accumulator + current) +
      //   arrFive.reduce((accumulator, current) => accumulator + current)
      // );
      // return [...arrThree, ...arrFive].reduce((accumulator, current) => accumulator + current)
      let arr = [...arrThree, ...arrFive];
      return arr.filter((item, index) => arr.indexOf(item) === index).reduce((accumulator, current) => accumulator + current);
      // filter will remove the duplicates
    }
  }
}

console.log(Challenge.solution(10));
// console.log(Challenge.solution(-1));
// console.log(Challenge.solution(15));
// console.log(Challenge.solution(4));
// console.log(Challenge.solution(2));
