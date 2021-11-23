// ask the user for a number
// ask the user for a second number
// ask the user what they want to do: add, sub, mult, div
// do the calculation
// print result to the terminal 

const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log('Choose your first number?');
let number1 = readline.question();

console.log('Choose your second number?');
let number2 = readline.question();

console.log('What operation would you like to perform? \n 1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
}

console.log(`The result is ${output}`); 
