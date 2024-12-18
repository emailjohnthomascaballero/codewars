// Make the Deadfish Swim

// Create a parser to interpret and execute the Deadfish language.

// Deadfish operates on a single value in memory, which is initially set to 0.

// It uses four single-character commands:

// i: Increment the value
// d: Decrement the value
// s: Square the value
// o: Output the value to a result array
// All other instructions are no-ops and have no effect.

// Examples
// Program "iiisdoso" should return numbers [8, 64].
// Program "iiisdosodddddiso" should return numbers [8, 64, 3600].


// EASY EXPLANATION
// The goal is to create a program that can understand and run a special language called "Deadfish." This language works on one number, starting at 0, and performs simple operations using a few commands.

// Here's a breakdown of how it works:

// Commands:

// i: Increase the number by 1.
// d: Decrease the number by 1.
// s: Square the number (multiply it by itself).
// o: Add the current number to a result list (output it).
// How it works:

// The language starts with the number 0.
// The program uses the commands to change the number.
// Other characters that are not "i", "d", "s", or "o" do nothing and are ignored.
// Examples:
// Program: "iiisdoso"

// Start with 0.
// i: Increase to 1.
// i: Increase to 2.
// i: Increase to 3.
// s: Square the number (3 * 3 = 9).
// d: Decrease to 8.
// o: Output 8 (so 8 is added to the result list).
// s: Square 8 (8 * 8 = 64).
// o: Output 64 (add 64 to the result list).
// Result: [8, 64]
// Program: "iiisdosodddddiso"

// Start with 0.
// i: Increase to 1.
// i: Increase to 2.
// i: Increase to 3.
// s: Square to 9.
// d: Decrease to 8.
// o: Output 8.
// s: Square to 64.
// o: Output 64.
// d: Decrease to 63.
// d: Decrease to 62.
// d: Decrease to 61.
// d: Decrease to 60.
// i: Increase to 61.
// s: Square to 3721.
// o: Output 3721.
// Result: [8, 64, 3721]

/** return the output array and ignore all non-op characters */
export function parse(data: string): any {
  // return data.split('').map(char => char === 'i' ? 1 : char === 'd' ? -1 : char === 's' ? 2 : char === 'o' ? 'o' : 0);
  // const initialValue = 0;
  // return data.split('').reduce(
  //   (accumulator:any, currentValue) => currentValue === 'i' ? accumulator + 1 : currentValue === 'd' ? accumulator - 1 : currentValue === 's' ? accumulator * accumulator : currentValue === 'o' ? initialValue : accumulator,
  //   initialValue,
  // );
  let result:number[] = [0];
  let index = 0;
  data.split('').map(char => char === 'i' ? result[index] += 1 : 
    char === 'd' ? result[index] -= 1 : 
    char === 's' ? result[index] *= result[index] :
    char === 'o' ? result.push(result[index]) && index++ : 0);
  return result;

  // Result: [8, 64]
}

console.log(parse("iiisdoso"));