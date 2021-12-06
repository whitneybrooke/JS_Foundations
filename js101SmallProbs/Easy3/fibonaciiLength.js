// Write a function that calculates and returns the index
// of the first Fibonacci number that has the number of digits
// specified by the argument.

// (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer
// greater than or equal to 2.

// run the fibonacci method until you get to a certain amount of
// the number of digits given
// run fibonacci until double digits or triple digits are reached

function findFibonacciIndexByLength (num) {
  let index = 0;
  function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  index++;
  return index;
}


findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;