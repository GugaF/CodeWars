// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55
// 8th Kyu - My head is at the wrong end!

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the 
// animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// P: an array with three values. head, body tail. in any order
// R: return the array so that it is head, body, tail
// E: see below
// P: create an array with all of the elements in an array
    // reverse array to switch heads and tails
    // return the reordered array


function fixTheMeerkat(arr) {
    return arr.reverse()
}


console.log(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
console.log(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
console.log(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);