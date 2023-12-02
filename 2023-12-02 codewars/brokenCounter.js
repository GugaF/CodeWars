// https://www.codewars.com/kata/526471539d52735c620000c6
// 8 Kyu - Broken Counter

// Our counter prototype is broken. Can you spot, what's wrong here?


function Counter() {
    this.value = 0;
}
  
Counter.prototype.increase = function() {
    this.value++;
};
  
Counter.prototype.getValue = function() {
    return this.value;
};
  
Counter.prototype.reset = function() {
    this.value = 0;
};


// Anohter Way
// class Counter() {
//     constructor() { this.reset(); }
//     increase()    { this.value++; }
//     getValue()    { return this.value; }
//     reset()       { this.value = 0; }
// }


var counter = new Counter();
console.log(counter.getValue(), 0, 'Initial counter value must be 0');
counter.increase();
console.log(counter.getValue(), 1, 'Counter value must be increased');
counter.reset();
console.log(counter.getValue(), 0, 'Counter value must be 0 after reset');