let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");


const userScorePera=document.querySelector("#user-score");
const compScorePera=document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];



}
const drawGame = () => {
   
    msg.innerText="Game was Draw.play again.";
    msg.style.backgroundColor="#081b31"
};
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePera.innerText=userScore;
        msg.innerText=`you win! your${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    } else {
        compScore++;
        compScorePera.innerText=compScore;
       
        msg.innerText=`you lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice=", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;

        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;

        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
