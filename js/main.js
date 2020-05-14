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

let userInput = prompt('Enter a number: 1 - Paper, 2 - Scissor, 3 - Rock');;
let computerNum = Math.floor(Math.random() * 3) + 1;

console.log(userInput);
console.log(computerNum);

if (computerNum == 1 && userInput == 2 || computerNum == 2 && userInput == 3 || computerNum == 3 && userInput == 1) {
    console.log ("User wins");
}

else if (computerNum == userInput) {
    console.log("Tie");
}

else {
    console.log("User losses");
}



