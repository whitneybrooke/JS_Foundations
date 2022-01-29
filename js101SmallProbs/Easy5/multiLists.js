// Write a function that takes two array arguments, each
// containing a list of numbers, and returns a new array
// that contains the product of each pair of numbers from
// the arguments that have the same index. You may assume
// that the arguments contain the same number of elements.

/*
input: two arrays
output: one array

rules: each element mulitplied by indexed elements in each array
       each array has same number of elements
       empty arrays?

algorithm

new result array variable
while the array lengths are greater than 0
loop through first arr and loop through second array
shift to empty array and multply elements
push to new array

*/


function multiplyList (arr1, arr2)  {
  let results = [];
  while (arr1.length > 0) {
    for (let idx = 0; idx < arr1.length; idx++) {
      results.push(arr1.shift() * arr2. shift());
    }
  }
  return results;
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]


// LS

// function multiplyList(numbers1, numbers2) {
//   let result = [];

//   for (let idx = 0; idx < numbers1.length; idx += 1) {
//     result.push(numbers1[idx] * numbers2[idx]);
//   }

//   return result;
// }