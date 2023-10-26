// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
// 6 Kyu - Split Strings

// Complete the solution so that it splits the string into pairs of 
// two characters. If the string contains an odd number of characters 
// then it should replace the missing second character of the final 
// pair with an underscore ('_').

// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let splitStrings = []
    for (let i = 0; i < str.length; i += 2 ) {
        splitStrings.push(str[i] + (str[i + 1] === undefined ? '_' : str[i+1]))
    }

    return splitStrings
}

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);