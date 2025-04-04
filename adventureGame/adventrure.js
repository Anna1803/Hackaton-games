const readlineSync = require("readline-sync");

function askToStart() {
    const answer = readlineSync.question("DO you want to play the adventure game? (yes/no)")

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

console.log("hiii");