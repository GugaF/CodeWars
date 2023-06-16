// https://www.codewars.com/kata/57238766214e4b04b8000011
// 8 Kyu - Simple Change Machine 

// Your task is to create a change machine.

// The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. 
// A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

// The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. 
// If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

// This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. 
// The values of the string will be descending.

function changeMe(moneyIn){
    const acceptedInput = [ "£5", "£2", "£1", "50p" ]
    if(acceptedInput.includes(moneyIn)) {
      // strip currency symbols
      let amount = Number(moneyIn.replace("£", "").replace("p", ""))
      // convert to p
      if (amount === 1 || amount === 2 || amount === 5)
          amount *= 100
      // how many times 20p fits into amount
      let repeat20p = amount / 20
      // print 20p n times
      let answer = "20p ".repeat(Math.floor(repeat20p))
      // remove space or add remainder 10p
      repeat20p % 1 == 0 ? answer = answer.trim() : answer += "10p"
      
      return answer
    } else if (moneyIn === "20p") {
      return "10p 10p"
    } else {
      return moneyIn
    }
}


console.log(changeMe("£1"), "20p 20p 20p 20p 20p")