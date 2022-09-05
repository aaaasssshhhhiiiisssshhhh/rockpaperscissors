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
    setTimeout(()=>userChoice_div.classList.remove("green-glow"), 1000 );
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
    setTimeout( ()=> userChoice_div.classList.remove("red-glow"), 1000 );
    
}
function draw (userChoice, computerChoice){
    // console.log("draw");
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord ="computer".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${letterToWord(userChoice)}${smallUserWord} draws   ${letterToWord(computerChoice)}${smallComputerWord}.you draw 🥶`;// ES6 
    userChoice_div.classList.add("gray-glow");
    setTimeout(()=> userChoice_div.classList.remove("gray-glow"), 1000 );
}

function game (userChoice){
    const computerChoice = getComputerChoice();
    // console.log("the user choice :" +userChoice)
    // console.log("the computer choice " +computerChoice);

    //choice
    switch (userChoice + computerChoice){
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
}
main();