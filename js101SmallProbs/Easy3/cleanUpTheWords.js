/* eslint-disable id-length */
/*
Clean up the words

Given a string that consists of some words and an assortment
of non-alphabetic characters, write a function that returns
that string with all of the non-alphabetic characters replaced
by spaces. If one or more non-alphabetic characters occur in a
row, you should only have one space in the result (i.e., the
result string should never have consecutive spaces).

Example:

cleanUp("---what's my +*& line?");    // " what s my line "
*/

/*
input = string
output = string

rules:
remove non-alphabetic characters
must only have one space if multiple non alphabet characters are together
always takes a string?
empty string?

algorithm
- search the string using a loop
- if characters aren't equal to char of the alphabet, don't include
- if more than one space exists, replace with one space
or
- use regex?

*/

function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}

cleanUp("---what's my +*& line?");    // " what s my line "

// function cleanUp(text) {
//   let cleanText = '';

//   for (let idx = 0; idx < text.length; idx += 1) {
//     if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
//       cleanText += text[idx];
//     } else if (cleanText[cleanText.length - 1] !== ' ') {
//       cleanText += ' ';
//     }
//   }

//   return cleanText;
// }

// function isLowerCaseLetter(char) {
//   return char >= 'a' && char <= 'z';
// }

// function isUpperCaseLetter(char) {
//   return char >= 'A' && char <= 'Z';
// }