// Write a function that takes a string as an argument and returns
// that string with every lowercase letter changed to uppercase
// and every uppercase letter changed to lowercase. Leave all other
// characters unchanged.

/*
input: string
output: string

rules: uppercase must be lowercase
       lowercase must be uppercase
       any other char is left unchanged

Algorithm:
set new string variable
iterate through string
if uppercase, change to lowercase and save to new string
if lowercase, change to uppercase and change to string

*/

function swapCase (string) {
  let newStr = '';
  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (char >= 'a' && char <= 'z') {
      newStr += char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      newStr += char.toLowerCase();
    } else {
      newStr += char;
    }
  }
  return newStr;
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

// LS

// function swapCase(string) {
//   return string
//     .split("")
//     .map(char => {
//       if ((char >= 'a') && (char <= 'z')) {
//         return char.toUpperCase();
//       } else if ((char >= 'A') && (char <= 'Z')) {
//         return char.toLowerCase();
//       } else {
//         return char;
//       }
//     })
//     .join("");
// }