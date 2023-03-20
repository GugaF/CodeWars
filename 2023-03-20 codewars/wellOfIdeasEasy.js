// https://www.codewars.com/kata/57f222ce69e09c3630000212
// 8th Kyu - Well of Ideas - Easy Version

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', 
// if there are more than 2 return 'I smell a series!'.
// If there are no good ideas, as is often the case, return 'Fail!'.

// P: array with good and bad strings passed
// R: based on number of good vs bad, return 'Fail!', 'Publish!', 'I smell a series!'
// E: see below
// P: count number of goods 
    // if good count is one or two => 'Publish!'
    // if good count > 2 => 'I smell a series!'
    // if no good count => return 'Fail!'


const well = x => {
    let count = x.filter(x => x === 'good').length;
    
    return count < 1 ? 'Fail!' : 
           count < 3 ? 'Publish!' : 'I smell a series!';
}

console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');