// https://www.codewars.com/kata/559d2284b5bb6799e9000047
// 8th Kyu - Add Length

// What if we need the length of the words separated by a space to be added at the end of that same word and have it 
// returned as an array?

// Example(Input --> Output)
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word 
// added to each element .
// Note: String will have at least one element; words will always be separated by a space.

// P: string of words separated by spaces. there will always be at least one word
// R: an array where each word makes up an element. each word must now include a space with the count of letters of the word
    // added
// E: see above
// P: separate string into array elements using character " "
    // run through the array counting the number of letters in the element and concatenating " " + length of word

const addLength = str => str.split(' ').map(word => `${word} ${word.length}`);

console.log(addLength("you will win"),["you 3", "will 4", "win 3"])
console.log(addLength("apple ban"),["apple 5", "ban 3"])