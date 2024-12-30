// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

export const pigIt = (a : string) : any =>  {
  // let secondWords = a.split(' ').map(word => word.split('').slice(1).join('')).join(' '); //second words
  // let secondWords = a.split(' ').map(word => word === '' ? word : word.split('').slice(1).join('')); //second words output: [ 'ig', 'atin', 's', 'ool' ]

  let secondWords = a.split(' ').map(word => word === '' || word === ' ' ? null : word.split('').slice(1).join('')).filter(word => word !== null);
  // let secondWords = a.split(' ').map(word => word === '' || word === ' ' ? null : word.split('').slice(1).join('')).filter(word => word !== null);

  // let firstWords = a.split(' ').map(word => word.split('')[0]).join(''); //first words output: [ 'P', 'i', 'g' ]
  // let firstWords = a.split(' ').map(word => word.split('')[0]); //first words
  // let firstWords = a.split(' ').map(word => word === '' ? word : word.split('')[0]); //first words

  let firstWords = a.split(' ').map(word => word === '' || word === ' ' ? null : word.split('')[0]).filter(word => word !== null)
  // let firstWords = a.split(' ').map(word => word === '' || word === ' ' ? null : word.split('')[0]).filter(word => word !== null)

  // let filterPunctuation =
  // return `${secondWords} ${words2}`;
  // ig atin s ool Plic
  // return secondWords.split(' ').map(word => word + firstWords.split('').map(word => word).join('') + 'ay')
  // return secondWords.split(' ').map(word => word + 'ay')
  // return secondWords.map((word, index) => word + firstWords[index] + 'ay' );
  // return secondWords.map((word, index) => `${word}${firstWords[index] == '!' || firstWords[index] == '?' || firstWords[index] == '.' ? firstWords[index] : firstWords[index] + 'ay'}`).join(' ');

  // return secondWords.map((word, index) => `${word}${['!', '?', '.'].includes(firstWords[index]) ? firstWords[index] : firstWords[index] + 'ay'}`).join(' ');
  return secondWords.map((word, index) => `${word}${['!', '?', '.'].includes(firstWords[index]) ? firstWords[index] : firstWords[index] + 'ay'}`).join(' ');

  // return secondWords.map((word, index) => word == '!' ? word : `${word}${firstWords[index]}ay`).join(' ');
  // return secondWords.map((word, index) => word);
  // return a.split(' ').map(word => word === '' ? null : word.split('')[0]).filter(word => word !== null)
  // return secondWords
}

// console.log(pigIt("Pig latin is cool"));
// console.log(pigIt("Hello world !"));
console.log(pigIt("This   is my string ?")); //with whitespace
// console.log(pigIt("This is my string ."));
//  error undefineday // should ignore white space not removing them!