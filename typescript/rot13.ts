// ROT13

// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"


// tips:
// Applying ROT13 to a piece of text requires examining its alphabetic characters and replacing each one by the letter 13 places further along in the alphabet, wrapping back to the beginning if necessary.[2]

// To encode message: A becomes N, B becomes O, and so on up to M, which becomes Z, then the sequence continues at the beginning of the alphabet: N becomes A, O becomes B, and so on to Z, which becomes M. To decode a message, You apply the same substitution rules, but this time on the ROT13 encrypted text. (Any other character, for example numbers, symbols, punctuation or whitespace, are left unchanged.)

// source: https://en.wikipedia.org/wiki/ROT13

export function rot13(str: string): any {
// use charCodeAt() method and fromCharCode(num + 13)
  return str.charCodeAt(0);
}

console.log(rot13("a"));
// console.log(rot13("EBG13 rknzcyr."));