// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

export const pigIt = (a : string) : any =>  {
  let words1 = a.split(' ').map(word => word.split('').slice(1).join('')).join(' ');
  let words2 = a.split(' ').map(word => word.split('')[0]).join('');
  // return `${words1} ${words2}`;
  // ig atin s ool Plic
  return words1.split('')
}

console.log(pigIt("Pig latin is cool"));