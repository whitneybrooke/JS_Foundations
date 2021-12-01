// Isn't it odd?

function isOdd (num) {
  return num % 2 === 1 || num % 2 === -1;
}

console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17));
console.log(isOdd(-8));
console.log(isOdd(0));
console.log(isOdd(7));


// Log all odd numbers from 1 to 99, inclusive, to the console,
// with each number on a separate line.

for (let num = 0; num < 100; num++) {
  if (num % 2 === 1) {
    console.log(num);
  }
}

// Log all even numbers from 1 to 99, inclusive,
// to the console, with each number on a separate line.

for (let num = 0; num < 100; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

/* Build a program that asks the user to enter the length and width
of a room in meters, and then logs the area of the room to the console
in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time.
Use the readlineSync.prompt method to collect user input.

Example:

Copy Code
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/

const readlineSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Enter the length of the room in meters');
let length = readlineSync.question();

prompt('Enter the width of the room in meters');
let width = readlineSync.question();

let squareMeters = length * width;
let squareFeet = squareMeters * 10.7639;

console.log(`The area of the room is ${squareMeters.toFixed(2)} in square meters (${squareFeet.toFixed(2)}).`);


// Create a simple tip calculator. The program should prompt for a bill amount
// and a tip rate. The program must compute the tip, and then log both the tip
// and the total amount of the bill to the console. You can ignore input
// validation and assume that the user will enter numbers.

/*
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/


