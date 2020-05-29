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
let cpuNum = Math.floor(Math.random() * 3) + 1; // Generates a random number but makes it whole and ONLY in between 1-3.


if(userInput == cpuNum )
{
    console.log("It is a tie.")
}
else if(userInput == 3 && cpuNum == 1 || userInput == 1 && cpuNum == 1)
{
    console.log("CPU Wins.")
}
else if(userInput == 3 && cpuNum == 2 || userInput == 2 && cpuNum == 3)
{
    console.log("You Win!")
}
else if(userInput == 1 && cpuNum == 2 || userInput == 2 && cpuNum == 1)
{
    console.log("CPU Wins.")
}
else if (userInput == 1 && cpuNum == 3 || userInput == 3 && cpuNum == 1)
{
    console.log("You Win!")
}
else
{
    console.log("Wrong Input.")
}