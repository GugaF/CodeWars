// https://www.codewars.com/kata/580a094553bd9ec5d800007d
// 8 Kyu - Alan Partridge II - Apple Turnover

// Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. 
// According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.
// Task
// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

// Note: Input will either be a positive integer (or a string for untyped languages).

function apple(x){
    return x ** 2 > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}


console.log(apple('50'), 'It\'s hotter than the sun!!'); 
console.log(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'); 
