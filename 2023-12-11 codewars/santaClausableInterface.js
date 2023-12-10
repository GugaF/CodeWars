// https://www.codewars.com/kata/52b50a20fa0e77b304000103/solutions/javascript
// 7 Kyu - SantaClausable Interface

// You probably know, that in Javascript (and also Ruby) there is no concept of 
// interfaces. There is only a concept of inheritance, but you can't assume that 
// a certain method or property exists, just because it exists in the parent 
// prototype / class. We want to find out, whether a given object fulfils the 
// requirements to implement the "SantaClausable" interface. We need to implement 
// a method which checks for this interface.

// Rules
// The SantaClausable interface is implemented, if all of the following methods are 
// defined on an object:

//     sayHoHoHo()
//     distributeGifts()
//     goDownTheChimney()


var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};
  
var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
};


function isSantaClausable(obj) {  
    return typeof obj.sayHoHoHo === 'function' &&
           typeof obj.distributeGifts === 'function' &&
           typeof obj.goDownTheChimney === 'function';
}


console.log(isSantaClausable(santa), true);
console.log(isSantaClausable(notSanta), false);