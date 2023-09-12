// https://www.codewars.com/kata/5656b6906de340bd1b0000ac
// 7 Kyu - Two to One

// Take 2 strings s1 and s2 including only letters from a to z. 
// Return a new sorted string, the longest possible, containing distinct 
// letters - each taken only once - coming from s1 or s2.

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


// First Try
// function longest(s1, s2) {
//     s1 = (s1 + s2).split('').sort()
//     s3 = s1[0]
//     for (let i = 1; i < s1.length; i++) {
//         if (!s3.includes(s1[i])) {
//             s3 += s1[i]
//         }
//     }
//     return s3
// }


function longest(s1, s2) {
    return [...new Set(s1 + s2)].sort().join('')
}

  
console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")