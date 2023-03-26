// https://www.codewars.com/kata/56e2f59fb2ed128081001328
// 8th Kyu - Printing Array elements with Comma delimiters

// Input: Array of elements
// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.
// "h,o,l,a"

const printArray = (array) => array.join(",")

console.log(printArray(["h","o","l","a"]), "h,o,l,a")
