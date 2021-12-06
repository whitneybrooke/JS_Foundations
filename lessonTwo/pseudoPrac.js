/* eslint-disable no-unused-vars */
/* Writing formal pseudocode

SEQUENCE =>
Iput: GET
Output: PRINT
Compute: COMPUTE, CALCULATE, DETERMINE
Initialize: SET
Add: INCREMENT
Sub: DECREMENT

READ:retrieve a value from a variable

WHILE =>
WHILE condition sequence, ENDWHILE

REPEAT UNTIL =>
REPEAT sequence UNITL condition

FOR =>
FOR iteration bounds sequence, ENDFOR

CASE =>
CASE expression OF
condition 1: sequence 1
condition 2: sequence 2
condition n: sequence n
OTHERS : default
ENDCASE

IF-THEN-ELSE =>
IF condition THEN
sequence 1
ELSE
sequence 2
ENDIF

Use CALL for invoking a function
If handling exceptions use EXCEPTION, WHEN

EXAMPLES:

START

# Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    skip to the next iteration

  iterator = iterator + 1

PRINT savedNumber

END


*/


// -----------------------------------------------------------


/*

START

# a function that returns the sum of two numbers

SET a function nameFunction
SET two parameters for the function
CALCULATE the sum of the passed parameters
PRINT the sum

CALL function

END


*/

// eslint-disable-next-line no-unused-vars
function sum (num1, num2) {
  return num1 + num2;
}

// ---------------------------------------------------

// a function that takes an array of strings, and returns a string that
// is all those strings concatenated together

/*

START

SET function with one array parameter
SET string variable to pass new string in which to pass new string
FOR each element in array, concatenate and save to new variable
ENDFOR

PRINT string

END

*/

// eslint-disable-next-line no-unused-vars
const array = ['this', 'can', 'be', 'fun'];

function concat(arr) {
  let concatString = arr.join(' ');
  return concatString;
}


// a function that takes an array of integers, and returns a
// new array with every other element

/* START

# function that takes an array of integers

function (arr)
iterate over each element and only print every other element
somehow skip every other element
store to new array


PRINT new array

END */


// eslint-disable-next-line no-unused-vars
let array1 = [1,2,3,4,5,6];
let newArray = [];

// eslint-disable-next-line no-unused-vars
function skip(arr) {
  for (let index = 0; index < arr.length; index += 2) {
    newArray.push(arr[index]);
  }
  return newArray;
}

// or

// eslint-disable-next-line no-unused-vars
let array2 = [1,2,3,4,5,6];
let newArray1 = [];

function skip2 (arr) {
  for (let index in arr) { // the for/in loop returns an index
    if (index % 2 === 0) { // this helps log all even index [elements]
      newArray.push(arr[index]);
    }
  }
  return newArray;
}

function cap(name) {
  return name.toUpperCase();
}

let myName = "naveed";
cap(myName);
console.log(myName); // => 'naveed'