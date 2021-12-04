/*

Write a function that returns the next to last word
in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

Examples:

Copy Code
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

*/

function penultimate (string) {
  let array = string.split(' ');
  console.log(array);
  return array[array.length - 2];
}


console.log(penultimate("last word") === "last");
console.log(penultimate("Launch School is great!") === "is");