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

 If Rock and paper, Paper wins
 If Rock and Scissor, Rock wins
 If Paper and Scissor, Scissor wins
 If Paper and Rock, Rock wins

 Start by writing a Pseudocode to ensure you have your logic right before writing anycode.
*/

let userInput = prompt('Enter a number: 1 - Paper, 2 - Scissor, 3 - Rock');

let copmuterNum = Math.floor(Math.random() * 3) + 1;
let result = "";
if (userInput == 3 && copmuterNum == 1) {
    result += "Paper wins";
} else if (userInput == 3 && copmuterNum == 2) {
    result += "Rock wins";
} else if (userInput == 1 && copmuterNum == 2) {
    result += "Scissor wins";
} else if (userInput == 1 && copmuterNum == 3) {
    result += "Paper wins";
} else if (userInput == 2 && copmuterNum == 3) {
    result += "Rock wins";
} else if (userInput == 2 && copmuterNum == 1) {
    result += "Scissor wins";
} else if (userInput == copmuterNum) {
    result += "Tie!";
}

console.log(result);
