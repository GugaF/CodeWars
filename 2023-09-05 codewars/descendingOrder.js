// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
// 7 Kyu - Descending Order

// Description:

// Your task is to make a function that can take any non-negative integer as an argument and return it with
// its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321


    // P: integer that is always positive, can be zero
    // R: highest possible number that can be made using the integer's digits
    // E: see below
    // P: convert the number to a string
    //     convert the string to an integer array 
    //     sort array in descending order
    //    convert digits back into a number

function descendingOrder(n){
    return Number(String(n).split('').sort((a, b) => b - a).join(''))
}
  
console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(111), 111)
console.log(descendingOrder(15), 51)
console.log(descendingOrder(1021), 2110)
console.log(descendingOrder(123456789), 987654321)