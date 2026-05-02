let userScore=0;
let compScore=0;

let userscore=document.getElementById("user-score");
let compscore=document.getElementById("comp-score");
let msg=document.getElementById("msg");
let btns=document.querySelectorAll("button");

const showWinner=(userWin,UserChoice,CompChoice)=>{
    if(userWin===false){
        msg.style.backgroundColor="green";
        msg.innerText=`You Won! , ${UserChoice} beats ${CompChoice}`;
        console.log("You Won");
        userscore.innerText=++userScore;
        console.log(userscore);
    }
    else{
        msg.style.backgroundColor="red";
        msg.innerText=`You Lost! , ${CompChoice} beats ${UserChoice}`;
        console.log("Computer Won");
        compscore.innerText=++compScore;
        console.log(compscore);
    }
}

btns.forEach((button) => {
    button.addEventListener("click",()=>{
        const UserChoice=button.getAttribute("id");
        playGame(UserChoice);
    });
});

const genCompChoice=()=>{
    // rock paper scissor
    const options=["Rock","Paper","Scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame=(UserChoice)=>{
    console.log("User:",UserChoice);
    const CompChoice=genCompChoice();
    console.log("Computer:",CompChoice);

    if(UserChoice === CompChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(UserChoice==="Rock"){
            // compChoice=paper,scissor
            // userWin=CompChoice==="scissor"?false:true;
            if(CompChoice==="Scissor"){
                // msg.style.backgroundColor="green";
                // msg.innerText="You Won! , Rock beats Scissor";
                userWin=false;
            }
            else{
                // msg.style.backgroundColor="red";
                // msg.innerText="You Lost! , Paper beats Rock";
                userWin=true;
            }
        }
        else if(UserChoice==="Paper"){
            // compChoice=rock,scissor
            // userWin=CompChoice==="rock"?false:true;
            if(CompChoice=="Rock"){
                // msg.style.backgroundColor="green";
                // msg.innerText="You Won! , Paper beats Rock";
                userWin=false;
            }
            else{
                // msg.style.backgroundColor="red";
                // msg.innerText="You Lost! , Scissor beats Paper";
                userWin=true;
            }
        }
        else{
            // userWin=CompChoice==="paper"?false:true;
            if(CompChoice==="Paper"){
                // msg.style.backgroundColor="green";
                // msg.innerText="You Won! , Scissor beats Paper";
                userWin=false;
            }
            else{
                // msg.style.backgroundColor="red";
                // msg.innerText="You Lost! , Rock beats Scissor";
                userWin=true;
            }
        }
        showWinner(userWin,UserChoice,CompChoice);
    }
}
const drawGame=()=>{
    console.log("Game is draw");
    msg.style.backgroundColor="rgb(2, 2, 42)";
    msg.innerText="It was draw , Play Again";
}
