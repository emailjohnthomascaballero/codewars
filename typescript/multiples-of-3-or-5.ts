// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

export class Challenge {
  static solution(number: number) {
    let multipleOne = 0;
    let arr = [];
    for (let index = 3; index < number; index+=3) {
      // multipleOne =+ index;
      arr.push(index);
    }
    // return multipleOne;
    return arr
  }
}

console.log(Challenge.solution(10));