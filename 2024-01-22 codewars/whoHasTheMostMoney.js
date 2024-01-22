// https://www.codewars.com/kata/528d36d7cc451cd7e4000339
// 6 Kyu - Who has the most money?

// You're going on a trip with some students and it's up to you 
// to keep track of how much money each Student has. A student is 
// defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

// As you can tell, each Student has some fives, tens, and twenties. 
// Your job is to return the name of the student with the most money. 
// If every student has the same amount, then return "all".

// Notes:
//     Each student will have a unique name
//     There will always be a clear winner: either one person has the most, or everyone has the same amount
//     If there is only one student, then that student has the most money

const andy = new Student("Andy", 0, 0, 2); // 40
const stephen = new Student("Stephen", 0, 4, 0); // 40
const eric = new Student("Eric", 8, 1, 0); // 50
const david = new Student("David", 2, 0, 1); // 30
const phil = new Student("Phil", 0, 2, 1); // 40
const cam = new Student("Cameron", 2, 2, 0); // 30
const geoff = new Student("Geoff", 0, 3, 0); // 30

  
function mostMoney(students) {
    let totals = students.map(s => s.fives * 5 + s.tens * 10 + s.twenties * 20);
    let indices = [];
    totals.forEach((e, i) => e == Math.max(...totals) ? indices.push(i) : null);

    return indices.length == students.length && students.length > 1 ?
         'all' :
         indices.map((e, i) => students[e].name).join("' '")
}


console.log(mostMoney([andy, stephen, eric, david, phil]), "Eric")
console.log(mostMoney([cam, geoff, andy, stephen, eric, david, phil]), "Eric")
console.log(mostMoney([andy]), "Andy")
console.log(mostMoney([stephen]), "Stephen")
console.log(mostMoney([cam, geoff]), "all")
console.log(mostMoney([andy, stephen,david]), "Andy", "Stephen")
console.log(mostMoney([david, cam, geoff]), "all")