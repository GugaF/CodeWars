// https://www.codewars.com/kata/577bd026df78c19bca0002c0
// 8th Kyu - Correct the mistakes of the character recognition software

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1

// The test cases contain numbers only by mistake.

function correct(string) {
    // let charArray = string.split('');

	// for(let i = 0; i < charArray.length; i++) {
    //     if (charArray[i] === '0') {
    //         charArray[i] = 'O';
    //     } else if (charArray[i] === '1') {
    //         charArray[i] = 'I';
    //     } else if (charArray[i] === '5') {
    //         charArray[i] = 'S';
    //     }        
    // }

    // return charArray.join('');

    return string.split("")
                 .map(letter => letter === "0" ? letter = "O" 
                              : letter === "1" ? letter = "I"
                              : letter === "5" ? letter = "S" 
                              : letter)
                 .join("")
}

console.log(correct("L0ND0N"),"LONDON");
console.log(correct("DUBL1N"),"DUBLIN");
console.log(correct("51NGAP0RE"),"SINGAPORE");
console.log(correct("BUDAPE5T"),"BUDAPEST");
console.log(correct("PAR15"),"PARIS");