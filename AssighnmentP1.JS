//Task 1: Adding and Removing Elements

const sounds = ["Zoom", "Pow", "oog"];
sounds.push("Bzzz", "Wow");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
let fruits = ['apple', 'banana', 'orange'];
//Task 2: Sorting Arrays
let numbers = [4, 10, 1, 6];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 4, 6, 10]

//Task 3: Applying Array Methods

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//Filtering
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
//reduce
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
