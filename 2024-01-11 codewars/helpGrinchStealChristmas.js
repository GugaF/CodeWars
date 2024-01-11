// https://www.codewars.com/kata/63387232198a4c00286aa349
// 7 Kyu - Help Grinch steal Christmas from JS programmers

// Grinch wants to spoil Christmas for JavaScript programmers. For that, he devised 
// a hellish plan: pollute their Date prototype so that Christmas never happens. He wants 
// to change method getDate of Date so that it returns 26 for Date objects that represent 
// 25th of December but works correctly for all other days of the year.

// However, Grinch does not know how to do that. Can you help him?


Date.prototype.getDate = function getGrinchDate() {
    let [day, month, date] = this.toString().split(" ")
        
    if (date === "25" && month === "Dec") { return 26 }
    else { return +date }
}
  
  
let d = new Date('2024-10-05');
console.log(d.getMonth(), 9);
console.log(d.getDate(), 5);
console.log(d.getYear(), 124);

let e = new Date('1985-12-25');
console.log(e.getMonth(), 11);
console.log(e.getDate(), 26);
console.log(e.getYear(), 85);
