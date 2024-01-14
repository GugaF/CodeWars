// https://www.codewars.com/kata/56bc0fc65bdaeb46d800084a
// 7 Kyu - Math Object Madness

// You are a(n) novice/average/experienced/senior/professional/world-class Developer 
// (choose one) who specialises in Javascript. One day, your naughty little brother/sister/whatever 
// gets hold of your precious computer with all the software and functionality in it and manages 
// to utterly destroy the Javascript Math object! Being the Developer that you are, you decide to 
// recover as much of the functionality as possible.

// Most, if not all, of the functionality of Javascript's built-in Math object is disabled. Your goal 
// is to recover the following:

//     Math.ceil(x)
//     Math.floor(x)
//     Math.round(x)
//     Math.abs(x)
//     Math.max(args[]) (CAUTION: A variable number of arguments will be passed into the function)
//     Math.min(args[]) (CAUTION: A variable number of arguments will be passed into the function)
//     Math.pow(x,y) (you may assume the exponent is always a positive integer)

// You may also attempt to fix other methods such as Math.random() or Math.cos() but your code for 
// the other methods will not be tested.



Math.ceil = function (x) {
return Number(x.toString().split('.')[0]) + 1;
}

Math.floor = function (x) {
return Number(x.toString().split('.')[0]);
}

Math.round = function (x) {
    let wholeNumber = Number(x.toString().split('.')[0]);
    return (x - wholeNumber) >= 0.5 ? wholeNumber + 1 : wholeNumber;
}

Math.abs = function (x) {
    return x < 0 ? x * -1 : x;
}

Math.max = function (args) {//(CAUTION: A variable number of arguments will be passed into the function)
    return args.sort((a, b) => b - a)[0]
}

Math.min = function (args) { //(CAUTION: A variable number of arguments will be passed into the function)
    return args.sort((a, b) => a - b)[0]
} 

Math.pow = function (x,y) { //(you may assume the exponent is always a positive integer)
    return x ** y
}

// Math.ceil = x => x % 1 == 0 ? x : x - x % 1 + 1;
// Math.floor = x => x - x % 1;
// Math.pow = (x, y) => x ** y;
// Math.round = x => x % 1 == 0 ? x : x - x % 1 + (x % 1 >= 0.5 ? 1 : 0);
// Math.abs = x=> x<0 ? -x : x;
// Math.max = function (...x) {return x.sort((a,b)=>b-a)[0];}
// Math.max = function (...x) {return x.sort((a,b)=>b-a)[0];}
  
console.log(Math.ceil(4.5), 5);
console.log(Math.floor(4.5), 4);
console.log(Math.round(4.4), 4);
console.log(Math.round(4.5), 5);
console.log(Math.abs(3), 3);
console.log(Math.abs(-2), 2);
console.log(Math.max([-2, -4, 3, 2, 9]), 9);
console.log(Math.min([-2, -4, 3, 2, 9]), -4);
console.log(Math.pow(2, 3), 8);