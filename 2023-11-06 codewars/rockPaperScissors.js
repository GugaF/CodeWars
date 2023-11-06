// https://www.codewars.com/kata/5672a98bdbdd995fad00000f
// 8 Kyu - Rock Paper Scissors!

// Let's play! You have to return which player won! In case of 
// a draw return Draw!.

// Examples(Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


const rps = (p1, p2) => {
    return p1 === p2 ? 'Draw!' :
           (p1 === 'rock' && p2 === 'scissors') || 
           (p1 === 'paper' && p2 === 'rock') || 
           (p1 === 'scissors' && p2 === 'paper') ? 'Player 1 won!' : 'Player 2 won!'
};


console.log(rps('rock', 'scissors'), 'Player 1 won!');
console.log(rps('scissors', 'paper'), 'Player 1 won!');
console.log(rps('paper', 'rock'), 'Player 1 won!');
console.log(rps('scissors', 'rock'), 'Player 2 won!');
console.log(rps('paper', 'scissors'), 'Player 2 won!');
console.log(rps('rock', 'paper'), 'Player 2 won!');
console.log(rps('rock', 'rock'), 'Draw!');
console.log(rps('scissors', 'scissors'), 'Draw!');
console.log(rps('paper', 'paper'), 'Draw!');