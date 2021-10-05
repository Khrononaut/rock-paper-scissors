// chooses a symbol and return it.
function computerPlay() {
    let list = ["Rock", "Paper", "Scissors"];
    let randomEl = list[Math.floor(Math.random() * list.length)];
    return randomEl;
    }

//play a round. return based on the computer's chosen symbol the result of the round.
function playRound() {

    function winExpl(v,l) {
        return `${v} beats ${l}.`;
    }
    function drawExpl(d) {
        return `${d} against ${d} results in a draw.`;
    }
    function winMessage(v,l) {
        console.log("You've won this round!" + " " + winExpl(v,l));
    }
    function defMessage(v,l) {
        console.log("You've lost the round!" + " " + winExpl(v,l));
    }
    function drawMessage(d) {
        console.log("Draw for this round!" + " " + drawExpl(d));
    }

    let rock = "ROCK";
    let paper = "PAPER";
    let scissors = "SCISSORS";

    let win = "Victory";
    let loss = "Defeat";

    let regExList = [/[rock]/gi, /[paper]/gi, /[scissors]/gi];
    let computerSelection = computerPlay();

    let input = window.prompt("Choose a symbol for this round.", "Rock, paper or scissors");

    if (regExList[0].test(input)) {
        if (computerSelection === "Scissors") {
            winMessage(rock, scissors);
            return win;
        } else if (computerSelection === "Paper") {
            defMessage(paper, rock);
            return loss;
        } else {
            drawMessage(rock);
        }
    } else if (regExList[1].test(input)) {
        if (computerSelection === "Scissors") {
            defMessage(scissors, paper);
            return loss; 
        } else if (computerSelection === "Rock") {
            winMessage(paper, rock);
            return win;
        } else {
            drawMessage(paper);
        }
    } else if (regExList[2].test(input)) {
        if (computerSelection === "Paper") {
            winMessage(paper, rock);
            return win; 
        } else if (computerSelection === "Rock") {
            defMessage(rock, scissors);
            return loss;
        } else {
            drawMessage(scissors);
        }
    }
}

function playGame() {
    let playerCounter = 0;
    let compCounter = 0;
    let i = 1;

    while (compCounter !== 3 && playerCounter !== 3) {
        roundResult = playRound();
        if (roundResult === "Victory") {
            playerCounter += 1;
        } else if (roundResult === "Defeat") {
            compCounter += 1;
        }
        console.log(playerCounter);
        console.log(compCounter);
        console.log(`${i}. round has been played.`);
        i++;
    }

    if (playerCounter === 3) {
        alert("Congratulations! You've won the game.");
        location.reload();
    } else {
        alert("I'm sorry! You've lost the game.");
        location.reload();
    }
}

playGame();