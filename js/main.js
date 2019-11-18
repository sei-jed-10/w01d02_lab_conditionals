let computerNum = Math.floor(Math.random() * 3) + 1;
var  player = prompt("lets play 1-Paper, 2-Scissors, 3-Rock");
 
console.log("Player: ",player);
console.log("computers Play : ",computerNum);

 if(player === computerNum) {
   console.log("computer choice is:"+computerNum+" and your choice is:"+player);
   console.log("match draw"); 
 }

 else {
   if((computerNum == 1 && player == 2) || (computerNum == 2 && player == 1)){
     console.log("computer choice is:"+computerNum+" and your choice is:"+player);
     console.log("Scissors wins");
 }

 else if(  (computerNum == 2 && player == 3) ||(computerNum == 3 && player == 2)) 
 {
   console.log("computer choice is:"+computerNum+" and your choice is:"+player);
   console.log("Rock wins");
 }

 else if((computerNum == 1 && player == 3) || (computerNum == 3 && player == 1)) 
 {
   console.log("computer choice is:"+computerNum+" and your choice is:"+player);
   console.log("Paper wins");
 }
}




 

