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

Algorithm:
create string variable empty
loop through string
if letter !== next letter add to string variable

*/

function crunch (string) {
  let stringy = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] !== string[idx + 1]) {
      stringy += string[idx];
    }
  }
  return stringy;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');
