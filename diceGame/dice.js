const readlineSync = require("readline-sync");

function askToStart() {
    const answer = readlineSync.question("DO you want to play the dice game? (yes/no)")

    if (answer === "yes") {
        return true;

    } else if (answer === "no") {
        console.log("okay, maybe next time :)")
        return false
    } else {
        console.log("please enter yes or no")
        return askToStart()
    }

}


const wantsToPlay = askToStart()


function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1 // Generates a random number between 1 and 6
    return diceRoll
}

function playRound() {
    console.log("player rolling dice...")
    const playerRoll = rollDice()
    console.log("you rolled a:", playerRoll)
    
    console.log("computer rolling dice...")
    const computerRoll = rollDice()
    console.log("computer rolled a:", computerRoll)


    if (playerRoll > computerRoll) {
        return "you win this round!"
        //console.log("you win this round!");
    } else if (computerRoll > playerRoll) {
        return "computer wins this round!"
       // console.log("computer wins this round!");
    } else {
        return "its a draw!"
        //console.log("its a draw!")
    }

}

console.log(playRound(wantsToPlay));
