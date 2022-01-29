// Write a function that takes an array as an argument and
// returns an array that contains two elements, each of which
// is an array. Put the first half of the original array elements
// in the first element of the return value, and put the second
// half in the second element. If the original array contains an
// odd number of elements, place the middle element in the first
// half array.

/*
input: one array
output: two arrays, split the first array

rules: if orignal array length is odd, put odd element in first array
       first half of elements in first array, second half in second array
       input is always arrays?

Algorithm:
set new array variables to empty arrays: arr1 and arr 2
make final array variable
split original array in half via the length
set halfway mark variable
loop to the halfway mark and push to arr1
loop after halway mark and push to arr 2
push arr 1 to final array
push arr 2 to final array

*/

function halvsies (array) {
  let arr1 = [];
  let arr2 = [];
  let finalArr = [];
  let half = Math.ceil(array.length / 2);
  arr1.push(array.slice(0, half));
  arr2.push(array.slice(half));
  finalArr.push(arr1, arr2);
  return finalArr;
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]


// LS

// function halvsies(array) {
//   let half = Math.ceil(array.length / 2);
//   let firstHalf = array.slice(0, half);
//   let secondHalf = array.slice(half);
//   return [firstHalf, secondHalf];
// }

// Discussion

// The basic task is to split the array argument into two pieces:
// a first and a second half. The solution gets the size of the
// first half by dividing the array argument's length by 2. If the
// length is odd, the Math.ceil method will account for it, making
// the first half larger than the second by 1. It creates the second
// half based on the size of the first half. It uses the Array.prototype.slice
// method to create both halves. Finally, it returns the halvsies array
// composed of the firstHalf and secondHalf as elements.