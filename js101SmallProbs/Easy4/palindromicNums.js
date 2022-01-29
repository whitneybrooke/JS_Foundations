/*

Write a function that returns true if its integer argument
is palindromic, or false otherwise. A palindromic number
reads the same forwards and backwards.

Examples:

Copy Code
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

input: numbers
output: boolean

rules: number reads the same forward and backward

algorithm


*/

function isPalindromicNumber (number) {
  let stringNum = String(number).split('').reverse().join('');
  return stringNum === String(number);
}

isPalindromicNumber(123210);       // false
isPalindromicNumber(34543);        // true
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

