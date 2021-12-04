const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to the Loan Calculator!');

while (true) {
  prompt("Please enter your loan amount.");
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt("Hmm...that doesn't look like a valid number.");
    loanAmount = readline.question();
  }

  prompt("Please enter your APR or Annual Percentage Rate without inputting '%'.");
  let interestRate = readline.question();


  while (invalidNumber(interestRate)) {
    prompt("Hmm...that doesn't look like a valid number.");
    interestRate = readline.question();
  }

  prompt("Please enter your loan duration in number of years.");
  let durationOfLoan = readline.question();

  while (invalidNumber(durationOfLoan)) {
    prompt("Hmm...that doesn't look like a valid number.");
    durationOfLoan = readline.question();
  }

  if (interestRate === '0') {
    let numOfMonths = durationOfLoan * 12;
    let totalAmount = loanAmount / numOfMonths;
    prompt(`Your monthly payment is ${totalAmount}.`);
  } else {
    let annualInterest = interestRate / 100;
    let monthlyInterest = annualInterest / 12;
    let durationInMonths = durationOfLoan * 12;

    let monthlyPayment = loanAmount * (monthlyInterest /
    (1 - Math.pow((1 + monthlyInterest), (-durationInMonths))));

    prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);
  }

  prompt('Would you like to perform another operation? (y/n)');
  let answer = readline.question();

  while (answer[0].toLowerCase() !== 'y' && answer[0].toLowerCase() !== 'n' ) {
    prompt('Please enter y or n)');
    answer = readline.question();
  }
  if (answer[0] === 'n') break;
}