// Write a function that counts the number of occurrences of
// each element in a given array. Once counted, log each element
// alongside the number of occurrences. Consider the words case
// sensitive e.g. ("suv" !== "SUV").

/*
input: array
output: each element with occurences counted at strings

rules: occurences are case sensitive
       empty array?

algorithm
create empty object variable
loop through each element in array and save to object
console.log each key and value in object


*/

function countOccurrences (array) {
  let object = {};
  for (let element of array) {
    object[element] = object[element] || 0;
    object[element] += 1;
  }
  return logObject(object);
}

function logObject (object) {
  for (let key in object) {
    console.log(`${key} ==> ${object[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
