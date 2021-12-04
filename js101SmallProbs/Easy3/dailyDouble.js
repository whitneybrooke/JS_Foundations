/* eslint-disable id-length */
/* ddaaiillyy ddoouubbllee

Write a function that takes a string argument and
returns a new string that contains the value of the
original string with all consecutive duplicate characters
collapsed into a single character.

Examples:

Copy Code
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');

*/

function crunch (string) {
  let newString = ' ';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string [i + 1]) {
      newString += string[i];
    }
  }
  return newString;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');

// function that takes a string
// turn string into array
// iterate over array and remove values that are the same
// save to new array
// return arr with joining together