/*
 Lets make a game of Rock paper scissor.
 +------+
  Rules
 +------+
The following numbers represent each input
 1 - Paper
 2 - Scissors
 3 - Rock
 i.e. 1 means paper

 If Rock and paper, Rock wins
 If Rock and Scissor, Rock wins
 If Paper and Scissor, Scissor wins
 If Paper and Rock, Rock wins

 Start by writing a Pseudocode to ensure you have your logic right before writing anycode.
*/

let userInput = prompt('Enter a number: 1 - Paper, 2 - Scissor, 3 - Rock')

let rand = Math.floor(Math.random() *3) +1;

console.log("Computer played:\t" + rand)
console.log("You played:   \t\t" + userInput)

if (userInput != rand) {
    
    if ((rand == 3 || userInput == 3) && (rand == 1 || userInput == 1)) {
        console.log("Paper wins")
    }

    if ((rand == 3 || userInput == 3) && (rand == 2 || userInput == 2)) {
        console.log("Rock wins")
    }

    if ((rand == 1 || userInput == 1) && (rand == 2 || userInput == 2)) {
        console.log("Scissor wins")
    }

}else{
    console.log("TIE!")
}

