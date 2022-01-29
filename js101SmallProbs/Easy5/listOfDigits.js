// Write a function that takes one argument, a positive
// integer, and returns a list of the digits in the number.

/*

input: integer
output: array of numbers

algorithm:

number to string
split string
return array
change each string number to number

*/

function digitList (number) {
  let array = String(number).split('');
  let newArr = array.map((element) => {
    return Number(element);
  });
  return newArr;
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
