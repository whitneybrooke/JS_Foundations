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