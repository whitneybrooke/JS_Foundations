/* Build a program that asks the user to enter the length and width
of a room in meters, and then logs the area of the room to the console
in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time.
Use the readlineSync.prompt method to collect user input.

Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/

// Ask the user for length in meters
// Ask the user for width in meters
// output the area of a room in square meters and square feet

let readlineSync = require('readline-sync');

function showMessage (message) {
  console.log(message);
}

showMessage('Enter the length of the room in meters');
let length = readlineSync.prompt();
length = parseInt(length, 10);

showMessage('Enter the width of the room in meters');
let width = readlineSync.prompt();
width = parseInt(width, 10);

let squareMeters = length * width;
let squareFeet = (squareMeters * 10.7639).toFixed(2);

showMessage(`The area of the room is ${squareMeters} (${squareFeet} square feet)`);