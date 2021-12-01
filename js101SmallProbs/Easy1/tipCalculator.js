// Create a simple tip calculator. The program should prompt for a bill amount
// and a tip rate. The program must compute the tip, and then log both the tip
// and the total amount of the bill to the console. You can ignore input
// validation and assume that the user will enter numbers.

/*
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/

const readlineSync = require('readline-sync');

function prompt(message) {
  console.log(message);
}

prompt('What is the bill?');
let bill = readlineSync.question();

prompt('What is the tip percentage?');
let tipPercent = readlineSync.question();

let totaltip = Number(bill * (tipPercent / 100));
let totalBill = Number(totaltip) + Number(bill);

console.log(`The tip is $${totaltip}`);
console.log(`The total is $${totalBill}`);