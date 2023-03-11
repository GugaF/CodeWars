// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
// 8th Kyu - Count The Monkeys


// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, 
// he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]


// P: number, assumed integer, of monkeys counted
// R: array counting the number from 1 to the number, inclusive. Do not count 0!
// E: see below
// P: take n, run a loop n times and print to a new array

function monkeyCount(n) {
    let array = [];
    for (let index = 1; index <= n; index++) {
        array[index - 1] = index;
    }
    return array;
}

console.log((monkeyCount(5)), [1, 2, 3, 4, 5]);
console.log((monkeyCount(3)), [1, 2, 3]);
console.log((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);