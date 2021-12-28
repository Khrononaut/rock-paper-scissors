// Storing elements in variables
const scissorsBtn = document.querySelector("#scissors");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const resultPara = document.querySelector("#result-para");
const roundMarkerSpn = document.querySelector("#round-marker-spn");

// FUNCTIONS

// Chooses a symbol and returns it
function computerPlay() {
    let list = ["Rock", "Paper", "Scissors"];
    let randomEl = list[Math.floor(Math.random() * list.length)];
    return randomEl;
    }

// Displays results
function winExpl(v,l) {
    return `${v} beats ${l}.`;
}
function drawExpl(d) {
    return `${d} against ${d} results in a draw.`;
}
function winMessage(v,l) {
    resultPara.innerText = "You've won this round!" + " " + winExpl(v,l);
}
function defMessage(v,l) {
    resultPara.innerText = "You've lost the round!" + " " + winExpl(v,l);
}
function drawMessage(d) {
    resultPara.innerText = "Draw for this round!" + " " + drawExpl(d);
}

// Counter variables
let playerCounter = 0;
let compCounter = 0;
let roundsPlayed = 0;

// Plays a round and returns based on the computer's chosen symbol the bout's result
function playRound(e) {
    console.log(e.target.id);
    let regExList = [/rock/gi, /paper/gi, /scissors/gi];
    let computerSelection = computerPlay();
    if (compCounter !== 3 && playerCounter !== 3) {
        if (regExList[0].test(e.target.id)) {
            if (computerSelection === "Scissors") {
                winMessage("ROCK", "SCISSORS");
                playerCounter++;
            } else if (computerSelection === "Paper") {
                defMessage("PAPER", "ROCK");
                compCounter++;
            } else {
                drawMessage("ROCK");
            }
        } else if (regExList[1].test(e.target.id)) {
            if (computerSelection === "Scissors") {
                defMessage("SCISSORS", "PAPER");
                compCounter++;
            } else if (computerSelection === "Rock") {
                winMessage("PAPER", "ROCK");
                playerCounter++;
            } else {
                drawMessage("PAPER");
            }
        } else if (regExList[2].test(e.target.id)) {
            if (computerSelection === "Paper") {
                winMessage("SCISSORS", "PAPER");
                playerCounter++;
            } else if (computerSelection === "Rock") {
                defMessage("ROCK", "SCISSORS");
                compCounter++;
            } else {
                drawMessage("SCISSORS");
            }
        }
        roundsPlayed++;
        roundMarkerSpn.innerText = roundsPlayed;
    } else {
        if (compCounter === 3) {
            resultPara.innerText = "You've lost the game."
            playerCounter = 0;
            compCounter = 0;
        } else {
            resultPara.innerText = "You've won the game."
            playerCounter = 0;
            compCounter = 0;
        }
    }

}
// Assigning event handlers

scissorsBtn.addEventListener("click", playRound);
rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);

