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


let computerNum =Math.floor(Math.random() *3)+1;
var player = prompt("Let's play Rock Paper Scissor ^-^ 1-Paper 2-Scissors 3-Rock, So what is your choice?");

if ((computerNum==3 && player==1)||(computerNum==1 && player==3)){
  console.log("Computer choice is: "+computerNum+" and your choice is: "+player);
  console.log("Rock wins");
}
else if ((computerNum==3 && player==2)||(computerNum==2 && player==3)){
  console.log("Computer choice is: "+computerNum+" and your choice is: "+player);
  console.log("Rock wins");
}
else if ((computerNum==1 && player==2)||(computerNum==2 && player==1)){
  console.log("Computer choice is: "+computerNum+" and your choice is: "+player);
  console.log("Scissor wins");
}
else if ((computerNum==1 && player==3)||(computerNum==3 && player==1)){
  console.log("Computer choice is: "+computerNum+" and your choice is: "+player);
  console.log("Rock wins");
}
else //(computerNum == player)
{
  console.log("Computer choice is: "+computerNum+" and your choice is: "+player);
 console.log("Tie");
}

