// https://www.codewars.com/kata/571d2e9eeed4a150d30011e7
// 7 Kyu - Competitive eating scoreboard

// You are the judge at a competitive eating competition and you need to 
// choose a winner!

// There are three foods at the competition and each type of food is worth 
// a different amount of points. Points are as follows:

//     Chickenwings: 5 points
//     Hamburgers: 3 points
//     Hotdogs: 2 points

// Write a function that helps you create a scoreboard. It takes as a parameter 
// a list of objects representing the participants, for example:

// [
//   {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
//   {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
// ]

// It should return "name" and "score" properties sorted by score; if scores are 
// equals, sort alphabetically by name.

// [
//   {name: "Big Bob", score: 134},
//   {name: "Habanero Hillary", score: 98}
// ]

// Happy judging!



// P: list of objects with counts for what each player ate
// R: score each food type accordingly and accumulate a score. return a list in the order of 
//   highest score first. if equal scores the two names must be in alphabetical order
// E: see below
// P: run a loop for each object
//    tally up the scores and create new object with name and score
//    order the list by score and then by name if two or more scores are equal
//    return the list of objects


function scoreboard(whoAteWhat){   
    // let scoreCard = []
    // for(let i = 0; i < whoAteWhat.length; i++) {
    //   let score = 0;
    //   score += whoAteWhat[i].chickenwings * 5;
    //   score += whoAteWhat[i].hamburgers * 3;
    //   score += whoAteWhat[i].hotdogs * 2;
    //   whoAteWhat[i].score = score;  
    //   scoreCard.push({ name: whoAteWhat[i].name, score: whoAteWhat[i].score});
    // }
    
    // return scoreCard.sort(compareByScoreAndName)
    
    // Refactored!!
    return whoAteWhat.map(obj => ({
        name: obj.name,
        score: obj.chickenwings * 5 +
               obj.hamburgers * 3 +
               obj.hotdogs * 2
    })).sort((a, b) => b.score - a.score || a.name > b.name)
}

// function compareByScoreAndName(b, a) { 
//   let scoreDiff = a.score - b.score
//   if (scoreDiff === 0) {
//     return b.name.localeCompare(a.name)
//   }
//   return scoreDiff
// }


var whoAteWhat = [
    {name: "Billy The Beast", chickenwings: 17 , hamburgers: 7, hotdogs: 8},
    {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
    {name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15},
    {name: "Big Boy" , chickenwings: 20, hamburgers: 4, hotdogs: 11},
    {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
];

console.log(scoreboard([{name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}]), [{name: "Big Bob", score: 134}]);
console.log(scoreboard([{name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15},{name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}]), [{name: "Big Bob", score: 134},{name: "Joey Jaws", score: 94}]);
console.log(scoreboard([{name: "Joey Jaws", chickenwings: 0, hamburgers: 1, hotdogs: 1},{name: "Big Bob" , chickenwings: 1, hamburgers: 0, hotdogs: 0}]), [{name: "Big Bob", score: 5},{name: "Joey Jaws", score: 5}]);
console.log(scoreboard([]), []);
console.log(scoreboard(whoAteWhat))