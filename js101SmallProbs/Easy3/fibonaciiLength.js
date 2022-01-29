/* eslint-disable no-unused-expressions */

/*
Write a function that calculates and returns the index
of the first Fibonacci number that has the number of
digits specified by the argument. (The first Fibonacci
number has an index of 1.)
*/

// (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer
// greater than or equal to 2.

/*
Pedac
inputs: number
outputs: number

rules: arguments is always greater than 2
       argument is never a negative number
       no edge cases of empty strings or objects

2n means what index the fibonacci reach 2 digits, 7n means the 7th index
dealing with integers/numbers

algorithm
fibonacci is first num + next num
set first at 1n
set second at 1n
set count to 2n
set fibonacciTotal to 0

fibonacciTotal = first + second
count++
first = second
second = fibonacci

*/

function findFibonacciIndexByLength (number) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibNum;

  do {
    fibNum = first + second;
    count += 1n;
    first = second;
    second = fibNum;
  } while (String(fibNum).length < number);
  return count;
}

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;