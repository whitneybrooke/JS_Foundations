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
    prompt(`Your monthly payment is $${totalAmount.toFixed(2)} for ${numOfMonths} months.`);
  } else {
    let annualInterest = interestRate / 100;
    let monthlyInterest = annualInterest / 12;
    let durationInMonths = durationOfLoan * 12;

    let monthlyPayment = loanAmount * (monthlyInterest /
    (1 - Math.pow((1 + monthlyInterest), (-durationInMonths))));

    prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)} for ${durationInMonths} months.`);
  }

  prompt('Would you like to perform another operation? (y/n)');
  let answer = readline.question();

  while (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'n' ) {
    prompt('Please enter y or n, only.');
    answer = readline.question();
  }

  if (answer.toLowerCase() === 'y') {
    console.clear();
  } else if (answer.toLowerCase() === 'n') {
    break;
  }
}
