// Write a function that takes a string, doubles every character in the string,
// and returns the result as a new string.

/*
input: string
output: string

rules: must repeat every character

algorithm

set new string variable
set array with string.split
loop through array and repeat char
add to new string
return string

*/

function repeater (string) {
  let newStr = '';
  let arr = string.split('');
  arr.forEach((char) => {
    newStr += char + char;
  });
  return newStr;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""