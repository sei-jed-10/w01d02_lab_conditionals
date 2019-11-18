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
let computerInput=(Math.floor(Math.random()*3)+1);
let winner="";
let userChoice="";
let computerChoice=""

/* Old Attempt
    //1.Paper and Sci
    if (userInput==1&&computerInput==2)
        winner="Scissor!\nComputer Wins!";
        else if (userInput==2&&computerInput==1)
        winner="Scissor!\You  Win!";
        //2.Paper and Rock
        else if (userInput==1&&computerInput==3) 
        winner="Paper!\You Win!";
        else if (userInput==3&&computerInput==1)
        winner="Paper!\nComputer Wins!";
        // Rock and Scissors
        else if (userInput==2&&computerInput==3)
        winner="Rock!\nComputer Wins!";
        else if (userInput==3&&computerInput==2)
        winner="Rock!\nYou Win!";
    
        else if (userInput==computerInput)
        winner="It's a tie!"
*/

//User Wins.
if ((userInput==2&&computerInput==1)||(userInput==1&&computerInput==3)|| (userInput==3&&computerInput==2) )
winner="You  Win!";

//Computer Wins.
else if((userInput==1&&computerInput==2)||(userInput==3&&computerInput==1)||(userInput==2&&computerInput==3))
winner="Computer Wins!";

//Tie.
else if (userInput==computerInput)
winner="It's a tie!"


function getChoice(number){
    let choice=""
        if (number==1)
        coice="Paper";
        else if (number==2)
       choice="Scissor"
        else if (number==3)
        choice="Rock"
return choice
    
}

userChoice=getChoice(userInput);
computerChoice=getChoice(computerInput);
prompt("You chose "+userChoice+"\nThe computer chose "+computerChoice+"\n"+ winner);
