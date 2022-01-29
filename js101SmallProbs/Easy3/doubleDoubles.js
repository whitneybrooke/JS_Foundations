/*
A double number is an even-length number whose left-side
digits are exactly the same as its right-side digits.
For example, 44, 3333, 103103, and 7676 are all double
numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as
an argument multiplied by two, unless the argument is
a double number; otherwise, return the double number as-is.

Examples:

Copy Code
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

*/

/*
inputs: numbers
outputs: numbers

rules: if the number provided is a double number return as is
       if the number is not a double number must return mulitplied by two
       edge cases include NaN and negative numbers
*/

/*
Algorithm
save number to string variable
if number is even length, split in half
save each half to variables
if both sides are equal print to console and coerce to number
else print to console as doubled

*/

function twice (number) {
  let string = String(number);
  let half = string.length / 2;
  let firstHalf = string.slice(0, half);
  let secondHalf = string.slice(half);
  console.log(firstHalf);
  console.log(secondHalf);
  if (firstHalf === secondHalf) {
    return number;
  } else {
    return number * 2;
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
