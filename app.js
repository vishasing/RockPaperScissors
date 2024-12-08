let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg"); 

const userscorepara= document.querySelector("#userscore");
const compscorepara= document.querySelector("#compscore")


const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randomIndex= Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText= "GAME DRAW";
    msg.style.backgroundColor= "#081b31" ; 
};

const showWinner = (userWin, userChoice,compChoice) => {
    if(userWin)
    {
        userscore++;
        userscorepara.innerText= userscore;
        msg.innerText= `YOU WIN ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "Green" ;
    } else { 
       compscore++;
       compscorepara.innerText= compscore;
       msg.innerText= `YOU LOSE ! ${compChoice} beats your ${userChoice}`;
       msg.style.backgroundColor= "Red" ;

    }
};

const playGame = (userChoice) => {
    console.log("User Choice=", userChoice);
    const compChoice= genCompChoice();
    console.log("Comp Choice=",compChoice);
    if(userChoice===compChoice) {
        //Draw 
        drawGame();
    } else {
        let userWin = true;
        if(userChoice=="rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice=="paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);  
    }
    
};





choices.forEach ((choice) => {
choice.addEventListener("click" , () => {
    const userChoice = choice.getAttribute("id"); 
    playGame(userChoice);
   }); 
});
 