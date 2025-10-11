let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const generateCompChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);//.floor -to reduce decimal value or .random-- to choose btw these 3 values
    return options[ranIdx];
}
const  drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw ,play again.";
     msg.style.backgroundColor = "rgb(45, 69, 70)";
}
const showWinner = (userwin , userchoice , compChoice) => {
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;        
        msg.innerText = `You win!! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! Your ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    //generate computer choice
    const compChoice = generateCompChoice();
    console.log("comp choice = ",compChoice);

    if(userchoice == compChoice){
        drawGame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userwin = compChoice === "scissor" ? false : true;
        }else if(userchoice === "scissor"){
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
         const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked -- " , userchoice);
        playGame(userchoice);
    });
});

