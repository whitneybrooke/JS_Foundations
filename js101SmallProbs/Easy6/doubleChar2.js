// Write a function that takes a string, doubles every consonant character
// in the string, and returns the result as a new string. The function
// should not double vowels ('a','e','i','o','u'), digits, punctuation,
// or whitespace.

/*
input: string
output: string

rules:

algorithm:
create consonants arr
create new empty arr variable
create new arr with split
iterate through array
if equal to vowel array, then add to empty arr
if not, add twice to emtpty arr
return empty arr

*/

let consonants = [...'bcdfghjklmnpqrstvwxyz'];

function doubleConsonants (string) {
  let newArr = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    newArr.push(string[idx]);
    if (consonants.indexOf(string[idx].toLowerCase()) >= 0) {
      newArr.push(string[idx]);
    }
  }
  return newArr.join("");
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""