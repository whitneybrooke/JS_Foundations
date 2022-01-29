/*
When Will I Retire?

Build a program that logs when the user will retire and
how many more years the user has to work until retirement.

Example:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

/*

Algorithm
input: numbers from user prompt
output: numbers in years

rules: take current age and current age for retirement
calculate how many more years the user must work

ask user for current age and store in variable
ask user when they want to retire and store in variable
get current year and store in date variable
coerce variables to numbers
subtract retirement age from current age for years left to retire
---- and store in variable
add that variable to the current year
print date and the year they will retire
print years left to go

*/

let readline = require('readline-sync');

function prompt (message) {
  console.log(message);
}

prompt('What is your age?');
let age = readline.question();

prompt('When do you want to retire?');
let retireAge = readline.question();

let yearsLeft = Number(retireAge) - Number(age);
let today = new Date();
let currentYear = today.getFullYear();
let retirementYear = Number(currentYear) + Number(yearsLeft);

console.log(`It's ${currentYear}. You will retire in ${retirementYear}`);
console.log(`You only have ${yearsLeft} years of work to go!`);