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

let computerNum = Math.floor(Math.random()*3)+1;
let userInput = prompt('Enter a number: 1 - Paper, 2 - Scissor, 3 - Rock');
console.log("user entered: "+userInput);
console.log("computer entered: "+computerNum);
if (userInput == computerNum){
    console.log("It's a tie!");
    alert("It's a tie!");
}
if ( (userInput == 3 && computerNum == 1) || (userInput == 1 && computerNum == 3) ){
    console.log("Paper Wins!");
    alert("Paper Wins!");
    if (userInput == 1) {
        alert("User Won");
    }
    else 
        alert("Computer Won");
}
if ( (userInput == 2 && computerNum == 1) || (userInput == 1 && computerNum == 2) ){
    console.log("Scissors Wins!");
    alert("Scissors Wins!");
    if (userInput == 2) {
        alert("User Won");
    }
    else 
        alert("Computer Won");
}
if ( (userInput == 3 && computerNum == 2) || (userInput == 2 && computerNum == 3) ){
    console.log("Rock Wins!");
    alert("Rock Wins!");
    if (userInput == 3) {
        alert("User Won");
    }
    else 
        alert("Computer Won");
}
if (userInput > 3 || userInput < 0){
    console.log('Invalid input!!!');
    alert("Invalid input!!!");
}




