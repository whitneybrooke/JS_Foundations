/* eslint-disable id-length */
/*

Convert a String to a Number!

The parseInt() method converts a string of numeric characters
(including an optional plus or minus sign) to an integer. The
method takes 2 arguments where the first argument is the string
we want to convert and the second argument should always be 10
for our purposes. parseInt() and the Number() method behave similarly.
In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the
appropriate number as an integer. You may not use any of the
methods mentioned above.

For now, do not worry about leading + or - signs, nor should you
worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available
in JavaScript, such as String() and Number(). Your function should
do this the old-fashioned way and calculate the result by analyzing
the characters in the string.

Examples

Copy Code
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
*/
//=====================================================


//=====================================================

function stringToInteger(string) {
  for (let i = 0; i < string.length; i++) {
    let integers = string[i * 1];
    console.log(integers);
  }
  return string;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570);

// function stringToInteger(string) {
//   for (let i = 0; i < string.length; i++) {
//     console.log(let integer += string[i * 1]);
//   }
//   return integer;
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570);