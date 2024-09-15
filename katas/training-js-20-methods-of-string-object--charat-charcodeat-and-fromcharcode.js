// Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()

// This time we learn three string methods used to single character operation :charAt() charCodeAt() and fromCharCode(). Their usage:

// stringObject.charAt(index)
// stringObject.charCodeAt(index)
// String.fromCharCode(num1,num2,...,numX)
// charAt() method can return to the specified location of the character. like this:

// var str="abcde";
// console.log(str.charAt(0));
// console.log(str.charAt(1));
// //output:
// a
// b
// In practical use, the charAt() method is usually replaced by str[index]. Because it is more convenient:

// var str="abcde";
// console.log(str[0]);
// console.log(str[1]);
// //output:
// a
// b
// charCodeAt() method can return the specified location of the character of the Unicode encoding. This return value is an integer between 0 and 65535.

// Method charCodeAt() and charAt() operation is similar, but the former is returned to the specified location of the character encoding, and the latter is returned to the character string.

// Unicode is a computing industry standard for the consistent encoding, representation, and handling of text expressed in most of the world's writing systems.This is the reference information of unicode.

// This example will display the character value and unicode value of each characters in str:

// var str="abcde";
// for (var i=0;i<str.length;i++){
//   console.log(str.charAt(i),str.charCodeAt(i));
// }

// //output:
// a 97
// b 98
// c 99
// d 100
// e 101
// If parameter index of charCodeAt() is omitted, its returned value will be the first character of stringObject. So the parameter can be omitted when the string length is 1; in other cases, you can't omit the parameter, unless you want to get the first character. An example of omitted parameter:

// var chars="abcde".split("");
// for (var i=0;i<chars.length;i++){
//   var tmp=chars[i].charCodeAt();
//   if (tmp==97) console.log("a for apple");
//   else console.log(tmp);
// }

// //output:
// a for apple
// 98
// 99
// 100
// 101
// fromCharCode() can accept one or more specified Unicode values, and then return a string. The method is a static method of String. It cannot be used as a method of the String object you have created. So its syntax should be String.fromCharCode() instead of stringObject.fromCharCode(). See example:

// var chars=[];
// for (var i=97;i<123;i++){
//   chars.push(String.fromCharCode(i));
// }
// console.log(chars.join(""))
// //output:
// abcdefghijklmnopqrstuvwxyz
// This code uses fromCharCode() to create a string from a to z.

// When fromCharCode() has only one parameter, it is very much like the reverse operation of charCodeAt(). they are a pair of good partners. We often see them in the kata about the shift encryption. See an example:

// function decode(str){
//   var chars=str.split("");
//   for (var i=0;i<chars.length;i++) 
//     chars[i]=String.fromCharCode(chars[i].charCodeAt()-1);
//   return chars.join("");
// }
// function encode(str){
//   var chars=str.split("");
//   for (var i=0;i<chars.length;i++) 
//     chars[i]=String.fromCharCode(chars[i].charCodeAt()+1);
//   return chars.join("");
// }
// var s="abcde"
// s=encode(s);
// console.log("encode:",s)    //encryption s
// s=decode(s);
// console.log("decode:",s)    //decryption s
// //output:
// encode: bcdef
// decode: abcde
// This is a simple example of the shift of encryption, encryption to the right (Unicode value becomes large) shift 1. The decryption and encryption on the contrary.

// Ok, lesson is over. let's us do some task.

// Task
// Coding in function topSecret, function accept 1 parameter:file. file is an encrypted string.

// Encryption using the right shift 3. Your job is to decrypt the file and read the contents of the file, and then answer my three questions. If the answer is correct, you will pass the test. Note: the decryption should be left shift; Shift is only for uppercase and lowercase letters, other characters will remain the same; The shift mode is a cyclic shift, for example:

// character "A" after decryption should be "X" instead of ">"
// character "B" after decryption should be "Y" instead of "?"
// character "C" after decryption should be "Z" instead of "@"
// character "a" after decryption should be "x" instead of "^"
// character "b" after decryption should be "y" instead of "_"
// character "c" after decryption should be "z" instead of "`"
// Additional hints: Fixed testcase only test the correctness of the decryption code. The answer to the three question will appear only after clicking on "Submit".

// This task may be more difficult for beginners. Good Luck!

// Some trainer may have doubts about the three questions, the following is some explanation, I hope to be helpful to the trainer.

// for example, after you click "submit", you see these text on your screen:

// Top secret files: No. 3330
// Super agent eEB, on a dark night, stole the Apple core from National Museum, causing $100 million in damage.
// and then:

// question 1 should answer:"3330"
// question 2 should answer:"eEB"
// question 3 should answer:"Apple core"
// if you haven't seen something like the text above, perhaps your decryption code is not correct ;-)

// Although the text is not the same every time, the next time may appear:

// Top secret files: No. 2135
// Super agent ZIUScE, on a dark night, stole the Lolli pop from National Museum, causing $100 million in damage.
// You only need to choose one of the text as the answer to the question. That is to say, any one of them is the correct answer.

// Series
// ( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)

// #1: create your first JS function helloWorld
// #2: Basic data types--Number
// #3: Basic data types--String
// #4: Basic data types--Array
// #5: Basic data types--Object
// #6: Basic data types--Boolean and conditional statements if..else
// #7: if..else and ternary operator
// #8: Conditional statement--switch
// #9: loop statement --while and do..while
// #10: loop statement --for
// #11: loop statement --break,continue
// #12: loop statement --for..in and for..of
// #13: Number object and its properties
// #14: Methods of Number object--toString() and toLocaleString()
// #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
// #16: Methods of String object--slice(), substring() and substr()
// #17: Methods of String object--indexOf(), lastIndexOf() and search()
// #18: Methods of String object--concat() split() and its good friend join()
// #19: Methods of String object--toUpperCase() toLowerCase() and replace()
// #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
// #21: Methods of String object--trim() and the string template
// #22: Unlock new skills--Arrow function,spread operator and deconstruction
// #23: methods of arrayObject---push(), pop(), shift() and unshift()
// #24: methods of arrayObject---splice() and slice()
// #25: methods of arrayObject---reverse() and sort()
// #26: methods of arrayObject---map()
// #27: methods of arrayObject---filter()
// #28: methods of arrayObject---every() and some()
// #29: methods of arrayObject---concat() and join()
// #30: methods of arrayObject---reduce() and reduceRight()
// #31: methods of arrayObject---isArray() indexOf() and toString()
// #32: methods of Math---round() ceil() and floor()
// #33: methods of Math---max() min() and abs()
// #34: methods of Math---pow() sqrt() and cbrt()
// #35: methods of Math---log() and its family
// #36: methods of Math---kata author's lover:random()
// #37: Unlock new weapon---RegExp Object
// #38: Regular Expression--"^","$", "." and test()
// #39: Regular Expression--"?", "*", "+" and "{}"
// #40: Regular Expression--"|", "[]" and "()"
// #41: Regular Expression--""
// #42: Regular Expression--(?:), (?=) and (?!)

function topSecret(str){
  //coding here...
  
}
//question1: The top secret file number is...
answer1="?";
//question2: Super agent's name is...
answer2="?";
//question3: He stole the treasure is...
answer3="?";

console.log(topSecret());





// var str="abcde";
// for (var i=0;i<str.length;i++){
//   console.log(str.charAt(i),str.charCodeAt(i));
// }

// var chars=[];
// for (var i=97;i<123;i++){
//   chars.push(String.fromCharCode(i));
// }
// console.log(chars.join(""))
//output:
// abcdefghijklmnopqrstuvwxyz

// function decode(str){
//   var chars=str.split("");
//   for (var i=0;i<chars.length;i++) 
//     chars[i]=String.fromCharCode(chars[i].charCodeAt()-1);
//   return chars.join("");
// }
// function encode(str){
//   var chars=str.split("");
//   for (var i=0;i<chars.length;i++) 
//     chars[i]=String.fromCharCode(chars[i].charCodeAt()+1);
//   return chars.join("");
// }
// var s="abcde"
// s=encode(s);
// console.log("encode:",s)    //encryption s
// s=decode(s);
// console.log("decode:",s)    //decryption s
//output:
// encode: bcdef
// decode: abcde