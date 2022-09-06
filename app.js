//DOM
let userScore =0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const reset_btn = document.getElementById("reset-btn");

const winner_span = document.getElementById("winner-message");


//get number of rounds
let totalRounds = prompt("Enter total rounds: ");
let rounds = 1;
while(true){
    if(totalRounds%2==0){
        totalRounds = prompt("Please enter odd rounds: ");
    }else{
        console.log("rounds", totalRounds)
        break;
    }
}

// function checkRounds (){
//     //check if the number is even
// if(totalRounds % 2 == 0) {
//  totalRounds = prompt("Please enter odd rounds: ");
// }

// // if the number is odd
// else {
//     console.log("rounds", totalRounds)
//     return true;
// }
// }

// checkRounds();

function getComputerChoice (){
    const choices = ["r", "p", "s"];
    // const randomNumber= 
    const randomNumbers = (Math.floor (Math.random()*3 ));
    return choices[randomNumbers];
}
// console.log(getComputerChoice()); 


function letterToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "scissor"; 

}
function wins (userChoice, computerChoice){
    // userScore ++;
    // console.log("win");
    // console.log(userScore);
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord ="computer".fontsize(3).sup();
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML =computerScore;
    // console.log(user);
    //  result_p.innerHTML = letterToWord(userChoice)+ " beats " + letterToWord(computerChoice) + ".you win 🔥"; ES5 
     result_p.innerHTML = `${letterToWord(userChoice)}${smallUserWord} beats   ${letterToWord(computerChoice)}${smallComputerWord}.you win 🔥`;// ES6 
    // console.log(computer);
    userChoice_div.classList.add("green-glow");
    setTimeout(()=>userChoice_div.classList.remove("green-glow"), 200 );
}
function lost (userChoice, computerChoice){ 
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord ="computer".fontsize(3).sup();
    // console.log("lost");
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML =computerScore;
    // console.log(user);
    //  result_p.innerHTML = letterToWord(userChoice)+ " beats " + letterToWord(computerChoice) + ".you win 🔥"; ES5 
     result_p.innerHTML = `${letterToWord(userChoice)}${smallUserWord} looses to   ${letterToWord(computerChoice)}${smallComputerWord}.you lost 🥲`;// ES6 
    // console.log(computer);
    userChoice_div.classList.add("red-glow");
    setTimeout( ()=> userChoice_div.classList.remove("red-glow"), 200 );
    
}
function draw (userChoice, computerChoice){
    // console.log("draw");
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord ="computer".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${letterToWord(userChoice)}${smallUserWord} draws   ${letterToWord(computerChoice)}${smallComputerWord}.you draw 🥶`;// ES6 
    userChoice_div.classList.add("gray-glow");
    setTimeout(()=> userChoice_div.classList.remove("gray-glow"), 200 );
}








function game (userChoice){
    console.log("rounds", rounds);

   
    const computerChoice = getComputerChoice();
    // console.log("the user choice :" +userChoice)
    // console.log("the computer choice " +computerChoice);
  
    //choice
    switch (userChoice + computerChoice  ){
        
        case "rs":
        case "pr":
        case "sp":
            // console.log("the user wins");
            wins(userChoice, computerChoice);
            break;
        
        case "sr":
        case "rp":
        case "ps":
            // console.log("the user looses") ;
            lost(userChoice, computerChoice);
            break;
        
        case "rr":
        case "ss":
        case "pp":
            // console.log("its a draw");
            draw(userChoice, computerChoice );
            break; 
        }

    if(rounds == totalRounds){
        //check scores
        console.log("game over");
        if (userScore> computerScore){
            // let rounds = console.log("the total number of rounds are",rounds)
            winner_span.innerHTML = "winner is user ❤️";
        }
        else{
            winner_span.innerHTML = "winner is computer 🤖";
        }
        
    }else{
        console.log("user score", userScore);
        console.log("computer score", computerScore);
        rounds++;
        // userChoice++;
        // computerScore ++;
    }

}
 
function reset_game(){
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function main (){

rock_div.addEventListener('click' ,function(){
// console.log("hey you clicked on rock");
game("r");
})
paper_div.addEventListener('click' ,function(){
// console.log("hey you clicked on paper");
game("p");
})
scissor_div.addEventListener('click' ,function(){
// console.log("hey you clicked on scissor");
game("s");
})
reset_btn.addEventListener('click', function(){
reset_game();
})
}

main();

