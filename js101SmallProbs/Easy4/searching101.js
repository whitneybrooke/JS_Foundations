/*
Write a program that solicits six numbers from the user
and logs a message that describes whether the sixth number
appears among the first five numbers.

Examples:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
*/

let readline = require('readline-sync');

let numbersArr = [];

function prompt (message) {
  console.log(`=> ${message}`);
}

prompt('Enter the first number');
numbersArr.push(readline.question());

prompt('Enter the second number');
numbersArr.push(readline.question());

prompt('Enter the third number');
numbersArr.push(readline.question());

prompt('Enter the fourth number');
numbersArr.push(readline.question());

prompt('Enter the fifth number');
numbersArr.push(readline.question());

prompt('Enter the last number');
let lastNumber = readline.question();

if (numbersArr.includes(lastNumber)) {
  prompt (`The number ${lastNumber} does appear in ${numbersArr.join(',')}`);
} else {
  prompt (`The number ${lastNumber} does not appear in ${numbersArr.join(',')}`);
}
