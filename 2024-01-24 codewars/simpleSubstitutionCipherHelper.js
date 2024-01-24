// https://www.codewars.com/kata/52eb114b2d55f0e69800078d
// 6 Kyu - Simple Substitution Cipher Helper

// A simple substitution cipher replaces one character from an alphabet with 
// a character from an alternate alphabet, where each character's position in 
// an alphabet is mapped to the alternate alphabet for encoding or decoding.

// If a character provided is not in the opposing alphabet, simply leave it as be.
// See examples below:

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
var sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode("abc"), "eta");
console.log(sub.encode("xyz"), "qxz");
console.log(sub.encode("aeiou"), "eirfg");
console.log(sub.decode("eta"), "abc");
console.log(sub.decode("qxz"), "xyz");
console.log(sub.decode("eirfg"), "aeiou");


function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    return this.substitute(str, abc1, abc2);
  }
  
  this.decode = function (str) {
    return this.substitute(str, abc2, abc1);
  }
  
  this.substitute = function (str, abcFrom, abcTo) {
    return str.split('').map(e => abcFrom.includes(e) ? abcTo[abcFrom.indexOf(e)] : e ).join('');
  }
}