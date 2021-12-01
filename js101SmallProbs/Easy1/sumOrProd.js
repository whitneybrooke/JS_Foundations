/* eslint-disable id-length */
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

const readlineSync = require('readline-sync');

function prompt(message) {
  console.log(message);
}

prompt('Please enter an integer greater than 0.');
let integer = readlineSync.question();

prompt('Enter "s" to compute the sum, or "p" to compute the product.');
let operation = readlineSync.question();


function sum(num) {
  if (num === 1) return 1;
  return num + sum(num - 1);
}

function product(num) {
  if (num === 1) return 1;
  return num * product(num - 1);
}

if (operation === 's') {
  console.log(`The sum of the integers between 1 and ${integer} is ${sum(Number(integer))}`);
} else if (operation === 'p') {
  console.log(`The product of the integers between 1 and ${integer} is ${product(Number(integer))}`);
}

/*
function sumLoop (num) {
  let sumTotals = 0;
  for (let i = 0; i <= num; i++) {
    sumTotals += i;
  }
  return sumTotals;
}
*/