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

// let paper = 1;
// let scissor = 2; 
// let rock = 3; 
let userInput = prompt('Enter a number: 1 - Paper, 2 - Scissor, 3 - Rock'); 
let computerNum = Math.floor(Math.random() *3) +1;

console.log(typeof userInput);


if(computerNum == userInput ) 
{
     console.log("game is tie")
 }
else if(userInput == 3 && computerNum == 2 || userInput == 2 && computerNum ==1 || userInput == 1 && computerNum ==3) 
 {
     console.log("user win"); 
 }
 else if( computerNum==3 && userInput == 2 || computerNum == 2 && userInput ==1 || computerNum == 1 && userInput ==3)
 {
     console.log("computer win"); 
 }


console.log("computer Number : "+ computerNum) 
console.log("userInput : " + userInput);


 