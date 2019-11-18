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
let computerInput = (Math.floor(Math.random() * 3) + 1)

if (userInput == computerInput){
    prompt("it's a tie")
 }
if (userInput == 1 && computerInput == 2 || userInput == 2 && computerInput == 1) {
    prompt( "Scissors wins")
}
if (userInput == 1 && computerInput == 3 || userInput == 3 && computerInput == 1) {
    prompt( "paper  wins")
}
if (userInput == 2 && computerInput == 3 || userInput == 3 && computerInput == 2) {
    prompt( "Scissors wins")  
}


