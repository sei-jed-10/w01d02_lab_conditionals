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
let computerNum = Math.floor(Math.random() *3) +1;



if(computerNum == userInput ) 
{
     console.log("tie")
 }
else if(userInput == 3 && computerNum == 2 || userInput == 2 && computerNum ==1 || userInput == 1 && computerNum ==3) 
 {
     console.log("`the user input win"); 
 }
 else if( computerNum==3 && userInput == 2 || computerNum == 2 && userInput ==1 || computerNum == 1 && userInput ==3)
 {
     console.log("computer win"); 
 }


console.log("Number of computer generate form : "+ computerNum) 
console.log("`user chioce : " + userInput);
