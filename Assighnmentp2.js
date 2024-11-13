//2. Exploring String Manipulation in JavaScript
//Task 1: Obtaining String Length - Create a string with some text content. - Use the `length` property to obtain the length of the string.
// Create a string with some text content
let mesage = "Hello, world!";

// Use the length property to obtain the length of the string
let stringLength = message.length;

// Output the length of the string
console.log("The length of the string is: " + stringLength);

//Task 2: Converting Cases - Create a string with mixed-case content. - Use the `toUpperCase` method to convert the string to uppercase. - Use the `toLowerCase` method to convert the string to lowercase.
let text = "Hello, World!";
const text = "Hello, World!";
const upperCaseName = text.toUpperCase();
console.log(upperCaseName);
//Task 3: Extracting Substrings - Create a string with some text content. - Use the `substring` method to extract a substring from the original string.
let sentence = "The quick brown fox jumps over the lazy dog";
let substring = sentence.substring(7, 12);
console.log(substring); 

//Task 4: Splitting Strings - Create a string containing multiple words separated by spaces. - Use the `split` method to split the string into an array of words based on the space delimiter.
let sentence = "The quick brown fox";
let words = sentence.split(" ");
console.log(words);
