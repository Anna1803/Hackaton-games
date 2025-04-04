# Easy Game - Roll a dice

installation:
npm init -y
npm install readline-sync

**Short description of the game**
<br>
__The game starts with a question saying if the player would like to start playing -> if: 1. yes => start the game
                                                                                          2. no => quit__

                                                                    Player chooses first               
1. Display message: "Rolling the dice..."
2. generate a random number between 1 and 6 (includes 1 and 6)
3. display the rolled number to the player:"You rolled a [number]"
4. display a message; "computer is rollice the dice..."
5. Computer choise
6. Randomly generated 'choice' using Math.random()
7. Main function playGame(player)
8. compare the players number with the computers number:
- if the players number > computers nuumber
-- display "you win this round!"

- if computer number > players number:
-- display "computer wins this round"


-if both numbers are equal:
--display "its a draw"

9. Ask: "do you want to play again (yes/no)
- if yes -> repeat the game from step 1(player rolls)
- if no -> display "thanks for playing!" and exit the game