// https://www.codewars.com/kata/632408defa1507004aa4f2b5
// 7 Kyu - Double value every next call

// This kata is about static method that should return different values.

// On the first call it must be 1, on the second and others - it 
// must be a double from previous value.

class Class {
    static number = 1;
    static getNumber() {
      let currentValue = this.number;
      this.number *= 2;
      return currentValue;
    }
}


console.log(Class.getNumber(),  1, "1st call should return 1");
console.log(Class.getNumber(),  2, "2nd call should return 2");
console.log(Class.getNumber(),  4, "3rd call should return 4");
console.log(Class.getNumber(),  8, "4th call should return 8");
console.log(Class.getNumber(), 16, "5th call should return 16");