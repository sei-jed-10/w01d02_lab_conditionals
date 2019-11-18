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

let userInput = prompt('Enter a number: 1 - Paper, 2 - Scissor, 3 - Rock');

let computerNum = Math.floor(Math.random()*3)+1;
console.log("computer "+computerNum);
console.log("User "+userInput);

if (userInput == computerNum){
    console.log("its a tie");   
}
if ((userInput == 3 && computerNum == 1) || (userInput == 1 && computerNum == 3 )){
    console.log("Rock wins");
}
if ((userInput == 3 && computerNum == 2) || (userInput == 2 && computerNum == 3)){
    console.log("Rock wins");
}
if ((userInput == 1 && computerNum == 2) || (userInput == 2 && computerNum == 1)){
    console.log("Scissor wins");
}
/*if ((userInput == 1 && computerNum == 3) || (userInput == 3 && computerNum == 1)){
    console.log("Rock wins");
}*/
