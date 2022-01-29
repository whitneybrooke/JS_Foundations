/* eslint-disable id-length */
/*
Write a function that takes one argument, a positive
integer, and returns a string of alternating '1's and '0's,
always starting with a '1'. The length of the string should
match the given integer.

Examples:

Copy Code
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
*/

// takes a number
// starts with 1 and 0 is next
// if num is even, prints 0
// if num is odd, prints 1
// save to string

function stringy (number) {
  let string = '';
  for (let num = 1; num <= number; num++) {
    if (num % 2 === 1) {
      string += '1';
    } else {
      string += '0';
    }
  }
  return string;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"