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
// for every number prints alternating ones and zeros
// somehow count that number and each time add a one or zero

function stringy (num) {
  let string = '';
  for (let i = 1; i <= num; i++ ) {
    if (i % 2 !== 0) {
      string += '1';
    } else if (i % 2 === 0) {
      string += '0';
    }
  }
  return string;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"