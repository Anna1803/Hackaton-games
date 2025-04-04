const readlineSync = require("readline-sync");

function askToStart() {
    const answer = readlineSync.question("DO you want to play the adventure game? (yes/no)")

    if (answer === "yes") {
        return "You are Indy. you enter an ancient jungle dungeon rumoured to hold the crown of egypt, Every room has a deadly choice, CHoose wisely and win. Choose poorly, and well you know.. you are dead!";

    } else if (answer === "no") {
        return "okay, maybe next time :)"
    } else {
        console.log("please enter yes or no")
        return askToStart()
    }

}


function startGame() {
    const wantsToPlay = askToStart()
    // console.log(wantsToPlay);

    // scenario 1

    if (wantsToPlay.startsWith("You are Indy")) {
            console.log(`
                -----------------------------------------------------
                Scenario 1 - Entering the Temple
                -----------------------------------------------------
                After a long trek through the dense jungle, you stand before the ancient ZOLTEC temple.
                Two mechanisms await:
                1. A carved stone dial with strange symbols
                2. A heavy golden lever shaped like a serpent
            `);


        const choice = readlineSync.question(
            "choose your path: \n 1. Enter the door with a dial \n 2. Enter the door with a snake \n"
        );
        
        if (choice === "1") {
            console.log("We turn the dial, the door opens!")
            scenario2()
        } else if (choice === "2") {
            console.log("Large snake appears and kills indy"+" "+"You are dead!");
            startGame()
        }

    }
}




// Scenario 2




function scenario2() {
    console.log( `
        -----------------------------------------------------
        Scenario 2 - The Bridge of Doom
        -----------------------------------------------------
        Inside the temple, you reach a chasm with a rickety rope bridge spanning across it. 
        The ancient wood looks fragile, but there’s also a narrow stone ledge along the side of the cavern
        1. Carefully edge along the stone ledge
        2. Cross the rope bridge quickly
        
        `);
    
    const choice = readlineSync.question(
      "choose your path: \n 1. Carefully edge along the stone ledge \n 2. Cross the rope bridge quickly \n"
    );

    if (choice === "1") {
      console.log("You did carefully crossed the stone ledge! You are safe!");
      scenario3();
    } else if (choice === "2") {
      console.log("The bridge collapsed and you fell into a swamp infested with alligators" + " " + "You are dead!");
      startGame();
    }

}



// scenerio 3
function scenario3() {

    console.log(`
        -----------------------------------------------------
        Scenario 3 - The Golden Eye of Eternity
        -----------------------------------------------------
        At last, you stand before the Golden Eye, resting on a pedestal 
        in a grand chamber glowing with torchlight. But there’s a catch—
        two identical artifacts lie before you. One is real. One is a trap.

        1. Take the left artifact – It shines faintly in the torchlight
        2. Take the right artifact – It looks identical but has strange markings
        
    `);

    const choice = readlineSync.question(
      "choose your path: \n 1. Pick the left artifact \n 2. Pick the right artifact \n"
    )
    if (choice === "1") {
        console.log("Left artifact is a fake! A dart trap is triggered and you are hit!" + " " + "You are dead!");
        startGame();
    } else if (choice === "2") {
        console.log("You picked the right artifact! You are victorious! The Golden Eye is yours!");
    }
}

// function scenario1() {
// if (wantsToPlay.startsWith("You are Indy")) {
//     return "After a long trek through the dense jungle";
//  } 
 
// }
 
// console.log(scenario1())
startGame()