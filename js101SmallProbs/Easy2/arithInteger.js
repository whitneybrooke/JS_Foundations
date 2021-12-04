/*

Write a program that prompts the user for two positive
integers, and then prints the results of the following
operations on those two numbers: addition, subtraction,
product, quotient, remainder, and power.
Do not worry about validating the input.

==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23


*/

let readlinesync = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}

function sum (num1, num2) {
  return num1 + num2;
}

function subtract (num1, num2) {
  return num1 - num2;
}

function multiply (num1, num2) {
  return num1 * num2;
}

function divide (num1, num2) {
  return num1 / num2;
}

function remainder (num1, num2) {
  return num1 % num2;
}

function exponent (num1, num2) {
  return num1 ** num2;
}

prompt('Enter the first number');
let firstNum = Number(readlinesync.question());

prompt('Enter the second number.');
let secondNum = Number(readlinesync.question());

console.log(`==> ${firstNum} + ${secondNum} = ${sum(firstNum, secondNum)}`);
console.log(`==> ${firstNum} + ${secondNum} = ${subtract(firstNum, secondNum)}`);
console.log(`==> ${firstNum} + ${secondNum} = ${multiply(firstNum, secondNum)}`);
console.log(`==> ${firstNum} + ${secondNum} = ${divide(firstNum, secondNum).toFixed(0)}`);
console.log(`==> ${firstNum} + ${secondNum} = ${remainder(firstNum, secondNum)}`);
console.log(`==> ${firstNum} + ${secondNum} = ${exponent(firstNum, secondNum)}`);