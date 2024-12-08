// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

export class Kata {
  static getCount(str: string): number {
    const filterByVowels = (char: string) => char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
    return str.split('').filter(filterByVowels).length;
  }
}

console.log(Kata.getCount("abracadabra"));