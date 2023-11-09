// https://www.codewars.com/kata/5262119038c0985a5b00029f
// 6 Kyu - Is a number prime?

// Define a function that takes an integer argument and returns a logical 
// value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater 
// than 1 that has no positive divisors other than 1 and itself.

// Requirements
//     You can assume you will be given an integer input.
//     You can not assume that the integer will be only positive. You may be 
//     given negative numbers as well ( or 0 ).
//     NOTE on performance: There are no fancy optimizations required, but still 
//     the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, 
//     depending on language ). Looping all the way up to n, or n/2, will be too slow.


function isPrime(num) {
    if (num <= 1 || num % 1 !== 0) { return false; } 

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) { return false; }
    }

    return true;
}


console.log(isPrime(0),  false, "0 is not prime");
console.log(isPrime(1),  false, "1 is not prime");
console.log(isPrime(2),  true, "2 is prime");
console.log(isPrime(73), true, "73 is prime");
console.log(isPrime(75), false, "75 is not prime");
console.log(isPrime(-1), false, "-1 is not prime");
console.log(isPrime(3),  true, "3 is prime");
console.log(isPrime(5),  true, "5 is prime");
console.log(isPrime(7),  true, "7 is prime");
console.log(isPrime(41), true, "41 is prime");
console.log(isPrime(5099), true, "5099 is prime");
console.log(isPrime(4),  false, "4 is not prime");
console.log(isPrime(6),  false, "6 is not prime");
console.log(isPrime(8),  false, "8 is not prime");
console.log(isPrime(9), false, "9 is not prime");
console.log(isPrime(45), false, "45 is not prime");
console.log(isPrime(-5), false, "-5 is not prime");
console.log(isPrime(-8), false, "-8 is not prime");
console.log(isPrime(-41), false, "-41 is not prime");