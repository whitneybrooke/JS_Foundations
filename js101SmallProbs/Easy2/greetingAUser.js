/*

Write a program that will ask for user's name.
The program will then greet the user. If the user
writes "name!" then the computer yells back to the user.

Examples

What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

*/

let readlineSync = require('readline-sync');

function prompt (message) {
  console.log(message);
}

prompt('Please enter you name.');
let name = readlineSync.question();

if (name.includes('!')) {
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}

