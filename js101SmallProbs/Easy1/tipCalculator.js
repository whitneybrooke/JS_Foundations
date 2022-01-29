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

let readlineSync = require('readline-sync');

function showMess (message) {
  console.log(message);
}

showMess('Please enter your bill amount.');
let billAmount = readlineSync.prompt();
billAmount = parseInt(billAmount, 10);

showMess('Please enter your tip amount.');
let tipPercent = readlineSync.prompt();
tipPercent = parseInt(tipPercent, 10);

let tipAmount = (billAmount / 100) * tipPercent;
let totalBill = tipAmount + billAmount;


showMess(`The tip is $${tipAmount}.`);
showMess(`The total bill is $${totalBill}`);
