// Write a function that takes a string and returns an object
// containing three properties: one representing the number of
// characters in the string that are lowercase letters, one
// representing the number of characters that are uppercase
// letters, and one representing the number of characters that
// are neither.

/*
input: string
output: object

algorithm:
set new obj variable
loop through string
if equal to upper case letter save to object and count
if equal to lower case letter save to object and count
if non-alphabet char save to object and count - set by regex

*/

function letterCaseCount (string) {
  let obj = {lowercase: 0, uppercase: 0, neither: 0};
  for (let idx = 0; idx < string.length; idx++) {
    if ((string[idx] >= 'a') && (string[idx] <= 'z')) {
      obj.lowercase += 1;
    } else if ((string[idx] >= 'A') && (string[idx] <= 'Z')) {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  }
  return obj;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }


// REG EX

// function letterCaseCount(string) {
//   let lowercaseChars = string.match(/[a-z]/g) || [];
//   let uppercaseChars = string.match(/[A-Z]/g) || [];
//   let neitherChars = string.match(/[^a-z]/gi) || [];

//   return {
//     lowercase: lowercaseChars.length,
//     uppercase: uppercaseChars.length,
//     neither: neitherChars.length
//   };
// }
