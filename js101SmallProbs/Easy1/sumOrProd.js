// Write a program that asks the user to enter an integer
// greater than 0, then asks whether the user wants to
// determine the sum or the product of all numbers between
// 1 and the entered integer, inclusive.

/*
Examples

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/

let readlineSync = require('readline-sync');

function prompt (message) {
  console.log(message);
}

function sum (number) {
  let count = 0;
  for (let num = 0; num <= number; num++) {
    count += num;
  }
  return count;
}

function multiply (number) {
  let count = 1;
  for (let num = 1; num <= number; num++) {
    count *= num;
  }
  return count;
}

prompt(`Please enter an integer greater than 0:`);
let number = readlineSync.question();
number = parseInt(number, 10);

prompt(`Enter "s" to compute the sum, or "p" to compute the product.`);
let userInput = readlineSync.question();

if (userInput.toLowerCase() === 's') {
  let sumTotal = sum(number);
  prompt(`The sum of the integers between 1 and ${number} is ${sumTotal}`);
} else if (userInput.toLowerCase() === 'p') {
  let productTotal = multiply(number);
  prompt(`The product of the integers between 1 and ${number} is ${productTotal}`);
} else {
  prompt('Oops, unknown operation');
}