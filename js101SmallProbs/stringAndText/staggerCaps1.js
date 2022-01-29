// Write a function that takes a string as an argument and returns
// that string with a staggered capitalization scheme. Every other
// character, starting from the first, should be capitalized and
// should be followed by a lowercase or non-alphabetic character.
// Non-alphabetic characters should not be changed, but should be
// counted as characters for determining when to switch between
// upper and lower case.

/*
input: string
output: string

rules: must be staggered cases for alphabet chars
       starts with capital letter
       non alphabet chars are unchanged but the next alphabet char
       must be the same upper or lower case

Examples:
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

algorithm:
set new string variable
if indices is even and is a letter = make capital
if indices is odd and a letter = make lowercase
else, add to new string
return new string
*/

function staggeredCase (string) {
  let newStr = '';
  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (idx % 2 === 0) {
      newStr += char.toUpperCase();
    } else if (idx % 2 === 1) {
      newStr += char.toLowerCase();
    }
  }
  return newStr;
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
