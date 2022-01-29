// Write a function that takes an array of strings and returns
// an array of the same string values, but with all vowels
// (a, e, i, o, u) removed.

/*
input: array
output: array

rules all vowels must be removed

algorithm
set new array variable
set array to vowels
loop through array
if element is a vowel continue
else push to new array
return to new array

*/

'abcd'.split('').forEach(char => {
  console.log(char);
});

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
