
// Lets make a game of Rock paper scissor. 
//  +------+
//   Rules
//  +------+
// The following numbers represent each input
//  1 - Paper
//  2 - Scissors
//  3 - Rock
//  i.e. 1 means paper

//  If Rock and paper, Rock wins
//  If Rock and Scissor, Rock wins
//  If Paper and Scissor, Scissor wins
//  If Paper and Rock, Rock wins

//  Start by writing a Pseudocode to ensure you have your logic right before writing anycode.


let computerNum = Math.floor(Math.random() * 3) + 1;

console.log(computerNum);
if (number === computerNum) {
  console.log("match draw");
} else {
  if ((computerNum == 1 && number == 2) || (computerNum == 2 && number == 1)) {
    console.log("Scissors wins");
  } else if (
    (computerNum == 2 && number == 3) ||
    (computerNum == 3 && number == 2)
  ) {
    console.log("Rock wins");
  } else if (
    (computerNum == 1 && number == 3) ||
    (computerNum == 3 && number == 1)
  ) {
    console.log("Paper wins");
  }
}
