/* eslint-disable no-unused-vars */

// Isn't it odd?

// Write a function that takes one integer argument, which may be
// positive, negative, or zero. This method returns true if the
// number's absolute value is odd. You may assume that the argument
// is a valid integer value.

function isOdd (num) {
  return num % 2 === 1 || num % 2 === -1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true


// OR
function isOdd2(number) {
  return Math.abs(number) % 2 === 1;
}

// In JavaScript, the remainder operator returns negative results
// if the number on the left is negative. For that reason,
// we need to call Math.abs() function and pass the number
// as the argument, to convert it to a positive value. Then,
// we can check whether dividing that number by 2 results
// in a remainder 1 or not.