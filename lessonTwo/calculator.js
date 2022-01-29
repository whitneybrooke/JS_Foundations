// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

let readlineSync = require('readline-sync');

console.log('Welcome to the simply calcuator!');

console.clear();

while (true) {
  console.log('What is your first number?');
  let firstNum = readlineSync.question();

  console.log('What is your first number?');
  let secondNum = readlineSync.question();

  console.log(`${firstNum} and ${secondNum}`);

  console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readlineSync.question();

  let output;
  if (operation === '1') { // '1' represents addition
    output = Number(firstNum) + Number(secondNum);
  } else if (operation === '2') { // '2' represents subtraction
    output = Number(firstNum) - Number(secondNum);
  } else if (operation === '3') { // 3 represents multiplication
    output = Number(firstNum) * Number(secondNum);
  } else if (operation === '4') { // 4 represents division
    output = Number(firstNum) / Number(secondNum);
  }

  console.log(`The result is: ${output}`);

  console.log('Would you like to perform another operation? (y/n)');
  let answer = readlineSync.question();
  if (answer[0].toLowerCase() !== 'y') break;

}