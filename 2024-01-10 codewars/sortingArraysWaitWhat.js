// https://www.codewars.com/kata/56bac4c34537cf1e270005a1
// 7 Kyu - Sorting Arrays ... wait, what?!

// Sorting an array of positive integers
// Background

// You are a(n) novice/average/senior/professional/world-class (choose one) 
// Computer Scientist and Web Developer who specialises in Javascript. One day, 
// while you were away, your naughty little brother fiddles with your computer 
// and somehow manages to disable the sort() method for arrays!

// Being the developer that you are, you decide to fix the sort() method so 
// that it works for any array consisting of only positive integers. You may use any 
// algorithm you wish.

// If you wish, you could also fix the sort() method for arrays such that it also 
// works on String arrays (sorting them into alphabetical order) but please note that
// it is not required and will not be tested.


Array.prototype.sort = function () {
    let sorted = []
    for(let i = 0; i < this.length - 1; i++) {
        for(let j = 0; j < this.length - 1 - i; j++) {
            if (this[j] > this[j+1]) { 
                [this[j], this[j + 1]] = [this[j + 1], this[j]]
            }
        }
    }
    return this
}

console.log([9,7,2,4,5,3,6,8,1].sort(),[1,2,3,4,5,6,7,8,9]);