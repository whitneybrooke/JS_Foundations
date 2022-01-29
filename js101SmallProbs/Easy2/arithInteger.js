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

let readlineSync = require('readline-sync');

function message (message) {
  console.log(`==> ${message}`);
}

message('Enter the first number:');
let firstNumber = readlineSync.question();
firstNumber = parseInt(firstNumber, 10);

message('Enter the second number:');
let secondNumber = readlineSync.question();
secondNumber = parseInt(secondNumber, 10);

message(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
message(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
message(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
message(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
message(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
message(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);