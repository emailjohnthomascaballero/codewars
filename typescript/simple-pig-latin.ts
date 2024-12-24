// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

export const pigIt = (a : string) : any =>  {
  let secondWords = a.split(' ').map(word => word.split('').slice(1).join('')).join(' '); //second words
  let firstWords = a.split(' ').map(word => word.split('')[0]).join(''); //first words
  // return `${secondWords} ${words2}`;
  // ig atin s ool Plic
  // return secondWords.split(' ').map(word => word + firstWords.split('').map(word => word).join('') + 'ay')
  return secondWords
}

console.log(pigIt("Pig latin is cool"));