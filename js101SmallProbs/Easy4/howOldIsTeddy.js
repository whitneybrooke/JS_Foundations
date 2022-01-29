/*
How old is Teddy?

Build a program that randomly generates Teddy's age,
and logs it to the console. Have the age be a random
number between 20 and 120 (inclusive).

Example Output:

Copy Code
Teddy is 69 years old!
*/

/*
input?
output: number

rules:
generate number between 20 and 120 inclusively
no negatives

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}

*/


//============================================
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);

// Discussion

// The solution makes use of the random() method of the Math object.
// The random() method generates a random floating-point number between
// 0 (inclusive) and 1 (exclusive).

// To have the random number be between 20 and 120, the solution uses
// the function randomBetween. It takes a min and a max value as arguments.

// The first part of the return statement in the randomBetween function,
// Math.floor(Math.random() * (max - min + 1)), generates a number based
// on the range (distance) between the max and the min. If the arguments
// passed are 20 and 120, there are 101 possible values, starting from
// 0 up to 100.

// The second part, + min;, which completes the return statement, offsets
// the current value so that the number returned falls within the range
// of the arguments passed.

// Finally, the Math.floor() method turns the generated number into an integer.
// The method takes a number and reduces it to the next lower integer,
// effectively truncating any digits following the decimal point.