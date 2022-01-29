/* eslint-disable no-unused-expressions */
let object = { fruit: 'apple', vegetable: 'carrot'};

console.log(object.fruit);
console.log(object.fruit[3]);
console.log(object['vegetable']);
console.log(object['vegetable'][0]);

let capitals = { uk: 'London', france: 'Paris', germany: 'Berlin'}; // [ 'uk', 'france', 'germany' ]
Object.keys(capitals); // [ 'uk', 'france', 'germany' ]
Object.values(capitals); // [ 'London', 'Paris', 'Berlin' ]
Object.values(capitals)[0]; // London

let numOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

let pets = Object.keys(numOfPets); // creates array of [ 'dogs', 'cats', 'fish' ]
console.log(pets);
pets.unshift('mice');

let counter = 0;
while (counter < pets.length) {
  let currentPet = pets[counter]; // iterates over pets array
  let currentPetNumber = numOfPets[currentPet]; // accesses the number is numOfPets object
  console.log(currentPetNumber);
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
  counter += 1;
}

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
}

//------------------------------------------

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(object) {
  let produceKeys = Object.keys(object);
  let selectedFruits = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = object[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }

  return selectedFruits;
}

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

//----------------
function selectFromObject (sourceObject) {
  let array = Object.keys(sourceObject);
  let newObject = {};

  for (let idx = 0; idx < array.length; idx++) {
    let keys = array[idx];
    let values = sourceObject[keys];

    if (values === 'whatevery you want to match') {
      newObject[keys] = values;
    }
  }

  return newObject;
}

selectFromObject();
//-----------------


let produceKeyValues = Object.entries(produce);

produceKeyValues.forEach(keyValue => {
  let [ key, value ] = keyValue;

  console.log(`${key} is a ${value}`);
});
// apple is a Fruit
// carrot is a Vegetable
// pear is a Fruit
// broccoli is a Vegetable

//-----------------------------------------------------------

// double numbers in an array with odd indices or at an odd index

function multNumbers(array, num) {
  let multipliedNums = [];
  for (let counter = 0; counter < array.length; counter += 1) {
    let currentNumber = array[counter];
    multipliedNums.push(currentNumber * num);
  }
  return multipliedNums;
}

multNumbers([1,4,3,7,2,6], 3);

//=========================================================

let numbers = [1, 2, 3];

let newArr = numbers.forEach(element => {
  console.log(element * 2);
}); // 2, 4, 6

console.log(newArr); // undefined, forEach does not return a new variable
// it returns undefined, forEach sticks to it's scope

// ============================================================

// filter works with truthy and falsy
let numbersArr = [1, 2, 3];

let oddNumbers = numbersArr.filter(element => { // set variable to new array
  return element % 2 === 1; // if it's true, it's logged to oddNumbers array
});

console.log(oddNumbers); // [1, 3] returns new array, unlike forEach

// or
numbersArr.filter(element => element % 2 === 1);

console.log(oddNumbers); // [1, 3]

// ==========================================================

let produce2 = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceArr = Object.entries(produce2);
let onlyVegetables = {};
let onlyFruits = {};

produceArr.forEach(element => { // for each works really well here as a loop
  let [ key, value ] = element;
  if (value === 'Vegetable') {
    onlyVegetables[key] = value;
  } else if (value === 'Fruit') {
    onlyFruits[key] = value;
  }
});

// ============================================================

[1, 2, 3].filter(num => num + 1);
// [1, 2, 3 ] does NOT transform the array, but basically returns each of
// the elements in the array saying yes or truthy each of those can be
// added to 1

[1, 2, 3].map(num => num * 2); // map returns a new array and uses TRANSORMATION
// instead of selection or truthy like filter
// [ 2, 4, 6 ]

[1, 2, 3].map(num => num % 2 === 1); // returns new array with booleans, still TRANSFORMS
// [ true, false, true ]

// ================================================================
let numbers2 = [1, 2, 3, 4];

function removeLastAndAdd (array) {
  let lastElement = array.pop();
  array.unshift(lastElement);
  return array;
}
removeLastAndAdd(numbers2);

// ===============================================================
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesObject = {};

flintstones.forEach((element, index) => {
  flintstonesObject[element] = index;
});
//{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

//==============================================================
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesArray = Object.values(ages); // returns [ 32, 30, 5843, 10, 22, 237 ]

agesArray.reduce((element, accumulator) => { // adds each element together
  return element + accumulator;
});

// find min age
Math.min(...agesArray);

// ===========================================================

// Create an object that expresses the frequency with which each letter
// occurs in this string:

let statement = "The Flintstones Rock";

statement.split('').filter(element => element !== ' ').reduce((accumulator, element) => {
  accumulator[element] ? accumulator[element] += 1 : accumulator[element] = 1;
  return accumulator;
}, {});


// -------- Array Methods -----------

let arr = ['ant', 'bear'];

arr.map(element => { // good for transformation of elements
  if (element.length > 3) {
    return element;
  }
  return undefined;
});

// [ undefined, 'bear' ]

arr.forEach(element => { // good for iteration of elements
  if (element.length > 3) {
    return element;
  }
  return undefined;
});

// undefined

arr.filter(element => { // good for extracting elements
  if (element.length > 3) {
    return element;
  }
  return undefined;
});

// ['bear']

arr.every(element => { // good for ALL elements to be true or false
  if (element.length > 3) {
    return element;
  }
  return undefined;
});

// false

arr.some(element => { // good for SOME elements to be true or false
  if (element.length > 3) {
    return element;
  }
  return undefined;
});

// true

let flintstones2 = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

flintstones2.reduce((accumulator, element, index) => {
  accumulator[element] = index;
  return accumulator;
}, {} );

let flintstonesObj = {};
flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});
flintstonesObj;

let ages2 = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesArr = Object.values(ages2);
agesArr.reduce((accumulator, element) => {
  return accumulator + element;
},0);

// or
Object.values(ages2).reduce((accumulator, element) => {
  return accumulator + element;
},0);


let ages3 = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let ageArr = Object.values(ages3);
Math.min(...ageArr);

// arrange the code in descending order
let arr10 = ['10', '11', '9', '7', '8'];

arr10.sort((a, b) => b - a );


// How would you order the following array of objects based
// on the year of publication of each book, from the earliest
// to the latest?

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
});


// For each of these collection objects, demonstrate how you
// would access the letter g.

//           0    1     2/ 0   1
//                            [0,   1,   2,   3]
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]); // arr1[2][1][3];


//              0                                                  1
let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1].third[0]); // arr2[1]['third'][0];

//            0        1        2
let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2].third[0][0]); // arr3[2]['third'][0][0];


// arrays within one object
let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1.b[1]); // obj1['b'][1];


//            one object with objects as its keys
let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
console.log(Object.keys(obj2.third)[0]); // Object.keys(obj2.third)[0];


// For each of these collection objects, demonstrate how you would
// change the value 3 to 4.

let arr4 = [1, [2, 3], 4];
arr4[1][1] = 4;  // [ 1, [ 2, 4 ], 4 ]

let arr5 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr5[2] = 4;  // [ { a: 1 }, { b: 2, c: [ 7, 6, 5 ], d: 4 }, 4 ]

let obj3 = { first: [1, 2, [3]] };
obj3.first[2][0] = 4; // { first: [ 1, 2, [ 4 ] ] }

let obj4 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj4.a.a[2] = 4;  // { a: { a: [ '1', 'two', 4 ], b: 4 }, b: 5 }


// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let memberDetails = Object.values(munsters);
/* returns an array of [
  { age: 32, gender: 'male' },
  { age: 30, gender: 'female' },
  { age: 402, gender: 'male' },
  { age: 10, gender: 'male' },
  { age: 23, gender: 'female' }
]
*/

let totalMaleAge = 0;

memberDetails.forEach(member => {
  if (member.gender === 'male') {
    totalMaleAge += member.age;
  }
});
console.log(totalMaleAge);

// OR

for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge += munsters[member].age;
  }
}
console.log(totalMaleAge);


// One of the most frequently used real-world string operations is
// that of "string substitution," where we take a hard-coded
// string and modify it with various parameters from our program.

// Given this previously seen family object, print the name,
// age, and gender of each family member:


let munsters2 = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// Each output line should follow this pattern:

// (Name) is a (age)-year-old (male or female).

Object.entries(munsters2).forEach((entry) => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1]['gender'];

  console.log(`${name} is a ${age}-year-old ${gender}`);
});


Object.entries(munsters2); // -- creates:
/*
[     0                   1
 0 [ 'herman', { age: 32, gender: 'male' } ],
 1 [ 'lily', { age: 30, gender: 'female' } ],
 2 [ 'grandpa', { age: 402, gender: 'male' } ],
 3 [ 'eddie', { age: 10, gender: 'male' } ],
 4 [ 'marilyn', { age: 23, gender: 'female' } ]
]
*/


// Using the forEach method, write some code to output all
// vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = 'aeiou';

Object.values(obj);
// [
//  0  [ 'the', 'quick' ],
//  1  [ 'brown', 'fox' ],
//  2  [ 'jumped' ],
//  3  [ 'over', 'the', 'lazy', 'dog' ]
// ]

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});


// Given the following data structure, return a new array with
// the same structure, but with the values in each subarray
// ordered -- alphabetically or numerically as appropriate --
// in ascending order.


let arr6 = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr6.map((array) => {
  if (typeof array[0] === 'string') {
    return array.slice().sort();
  } else {
    return array.slice().sort((a, b) => a - b);
  } 
});

// without SLICE arr6 will be mutated!
// arr6.map((array) => {
//   if (typeof array[0] === 'string') {
//     return array.sort();
//   } else {
//     return array.sort((a, b) => a - b);
//   }
// });


// Perform the same transformation of sorting the subarrays we did
// in the previous exercise with one difference; sort the elements
// in descending order.

arr6.map((array) => {
  if (typeof array[0] === 'string') {
    return array.slice().sort().reverse();
  } else {
    return array.slice().sort((a, b) => b - a);
  }
});


// Given the following data structure, use the map method
// to return a new array identical in structure to the original
// but, with each number incremented by 1. Do not modify the
// original data structure.

let arr7 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

