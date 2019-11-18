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
let computerNum = Math.floor(Math.random()* 3 ) + 1;

if (userInput >= 1 && userInput <= 3){
// if its the same chose 
if(userInput == computerNum){
    console.log("its a tie ");
}
// if its a Paper vs Rock
else if (userInput == 1 && computerNum == 3){
    console.log("Paper wins !!");
} 
else if (userInput == 1 && computerNum == 2){
    console.log("Paper Lost !!");
} 
//if its a scissor vs Rock
else if (userInput == 2 && computerNum == 3){
    console.log("Sissors Lost !!");
}
// if its a scissor vs paper 
else if (userInput == 2 && computerNum == 1){
    console.log("Scissor wins !!");
}else if (userInput == 3 && computerNum == 1){
    console.log("Rock Lost !!");
}else if (userInput == 3 && computerNum == 2){
    console.log("Rock wins !!");
} 

}
else {
    console.log("Sorry not found ")
}