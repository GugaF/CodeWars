// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
// 8th Kyu - Convert Number to Reverrsed Array of Digits

// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    // first attempt
    // n = n.toString().split('').reverse();
    // nDigits = n.map(x => parseInt(x));
    // return nDigits;

    // refactored to
    return n.toString().split('').reverse().map(Number)
}


console.log(digitize(35231),[1,3,2,5,3]);
console.log(digitize(0),[0]);