/* eslint-disable max-len */
/*
Letter Swap

Given a string of words separated by spaces,
write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter,
and that the string will always contain at least one word. \
You may also assume that each string contains nothing but
words and spaces, and that there are no leading, trailing, or repeated spaces.

Examples:

Copy Code
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
*/

/*
input: string
output: string

rules: must return a string with every first and last letter swapped
      strings will have no non-alphabetical letters, only spaces
      single letter words stay single

algorithm
split string and save to a variable
iterate over each element in array
iterate over each letter
switch each letter in each loop
use slice to make a new copy of last element
use slice to make copy of first element
switch them with assignment operator

*/

function swap (string) {
  let array = string.split(' ');
  let newString = '';
  for (let element of array) {
    if (array.length === 1) {
      return String(element);
    }
    let firstLetter = element.slice(0, 1);
    let lastLetter = element.slice(element.length - 1);
    newString += (lastLetter + element.slice(1, element.length - 1) + firstLetter + ' ');
  }
  return newString;
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"