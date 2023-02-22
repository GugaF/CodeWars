// https://www.codewars.com/kata/57eae65a4321032ce000002d
// 8th Kyu - Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string


// function fakeBin(x){
//     for(let digit = '0'; digit < x.length; digit++) {
//         if(x[digit] < '5') {
//             x[digit] = '0';
//         } else {
//             x[digit] = '1';
//         }
//     }
//     return x;
// }

// Refactored
function fakeBin(x){
    return x.split('').map(n => n < 5 ? 0 : 1).join('')
}


console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101'); 
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');