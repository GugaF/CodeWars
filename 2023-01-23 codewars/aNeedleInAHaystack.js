// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
// 8th Kyu - A Needle in a Haystack

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 



function findNeedle(haystack) {
    let result = "There is no needle in your haystack"
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === 'needle') {
            result = `found the needle at position ${i}`
            break
        }
    }
    return result;
}



var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
var haystack_4 = [1,2,3,4,5,6]

console.log(findNeedle(haystack_1), 'found the needle at position 3')
console.log(findNeedle(haystack_2), 'found the needle at position 5') 
console.log(findNeedle(haystack_3), 'found the needle at position 30')
console.log(findNeedle(haystack_4), 'There is no needle in your haystack')
