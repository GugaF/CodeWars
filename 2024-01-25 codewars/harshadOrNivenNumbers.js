// https://www.codewars.com/kata/54a0689443ab7271a90000c6
// 6 Kyu - Harshad or Niven numbers

// Harshad numbers (also called Niven numbers) are positive numbers that can 
// be divided (without remainder) by the sum of their digits.

// For example, the following numbers are Harshad numbers:
//     10, because 1 + 0 = 1 and 10 is divisible by 1
//     27, because 2 + 7 = 9 and 27 is divisible by 9
//     588, because 5 + 8 + 8 = 21 and 588 is divisible by 21

// While these numbers are not:
//     19, because 1 + 9 = 10 and 19 is not divisible by 10
//     589, because 5 + 8 + 9 = 22 and 589 is not divisible by 22
//     1001, because 1 + 1 = 2 and 1001 is not divisible by 2

// Harshad numbers can be found in any number base, but we are going to focus on 
// base 10 exclusively.

// Your task is to complete the skeleton Harshad object ("static class") which has 3 functions:
//     isValid() that checks if n is a Harshad number or not
//     getNext() that returns the next Harshad number > n
//     getSerie() that returns a series of n Harshad numbers, optional start value not included

// You do not need to care about the passed parameters in the test cases, they will always be valid 
// integers (except for the start argument in getSerie() which is optional and should default to 0).

// Note: only the first 2000 Harshad numbers will be checked in the tests.
// Examples

// Harshad.isValid(1)         ==>  true
// Harshad.getNext(0)         ==>  1
// Harshad.getSerie(3)        ==>  [ 1, 2, 3 ]
// Harshad.getSerie(3, 1000)  ==>  [ 1002, 1008, 1010 ]



/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = ( function() {
    'use strict';
  
    return {
      /**
       * Returns true when the given number is a valid Harshad number.
       *
       * @param {Number} number The given number
       * @returns {Boolean}
       * @function Harshad.isValid
       */
      isValid: function( number ) {
        return number % number.toString().split('').reduce((acc, e) => acc += Number(e) ,0) === 0;
      },
      /**
       * Gets the next Harshad number after the given number.
       *
       * @param {Number} number The given number
       * @returns {Number}
       * @function Harshad.getNext
       */
      getNext: function( number ) {
        let found = false;
        while (!found) {
          Harshad.isValid(++number) ? found = true : null;
        }
        return number;
      },
      /**
       * Returns the suite of Harshad numbers, starting after a given number.
       *
       * @param {Number} count The number of elements to return
       * @param {Number} start The number after which the serie should start;
       *  defaults to 0
       * @returns {Array}
       * @function Harshad.getSerie
       */
      getSerie: function( count, start = 0) {
        let series = [];
        for (let i = 0; i < count; i++) {
          start = Harshad.getNext(start);
          series.push(start);
        }
        return series;
      }
    };
  
} () );

console.log(Harshad.isValid( 1 ), true );
console.log(Harshad.isValid( 18 ), true );
console.log(Harshad.isValid( 19 ), false );

console.log(Harshad.getNext( 1 ), 2 );
console.log(Harshad.getNext( 18 ), 20 );
console.log(Harshad.getNext( 1000 ), 1002 );

console.log( Harshad.getSerie( 10 ), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );
console.log( Harshad.getSerie( 20 ), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42 ] );
console.log( Harshad.getSerie( 10, 1000 ), [ 1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020 ] );