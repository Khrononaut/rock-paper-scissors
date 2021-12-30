// Storing elements in variables
const scissorsBtn = document.querySelector("#scissors");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const userTkn = document.querySelector(".user-token");
const compTkn = document.querySelector(".comp-token");
const userTag = document.querySelector(".user-tag");
const compTag = document.querySelector(".comp-tag");

// Counter variables
let playerCounter = 0;
let compCounter = 0;

// HTML elements
class FontAwesomeElement {
    constructor(specialClass) {
        this.classStandard = "fa-regular";
        this.classSize = "fa-9x";
        this.specialClass = specialClass;
    }

    setEl() {
        const iEl = document.createElement("i");
        iEl.classList.add(`${this.classStandard}`, `${this.classSize}`, `${this.specialClass}`);
        return iEl;
    }
}
const faRock = new FontAwesomeElement("fa-hand-back-fist");
const faPaper = new FontAwesomeElement("fa-hand");
const faScissors = new FontAwesomeElement("fa-hand-scissors");

class FontAwesomeNumber extends FontAwesomeElement {
    constructor(specialClass) {
        super();
        this.classStandard = "fa-solid";
        this.classSize = "fa-5x";
        this.specialClass = specialClass;
    }
}

const faThree = new FontAwesomeNumber("fa-3");
const faTwo = new FontAwesomeNumber("fa-2");
const faOne = new FontAwesomeNumber("fa-1");

function toggleClasses() {
    userTkn.classList.toggle("winner");
    userTag.classList.toggle("winner");
    compTkn.classList.toggle("loser");
    compTag.classList.toggle("loser");
}

function toggleDraw() {
    userTkn.classList.toggle("draw");
    userTag.classList.toggle("draw");
    compTkn.classList.toggle("draw");
    compTag.classList.toggle("draw");
}

function removeClasses() {
    userTkn.classList.remove("winner");
    userTag.classList.remove("winner");
    compTkn.classList.remove("loser");
    compTag.classList.remove("loser");
}

// Misc
let roundCanStart = true; // Preliminary round "lock"
let regExList = [/rock/gi, /paper/gi, /scissors/gi];
function computerSelects() { // Comp's algorithm for choosing a random token
    let list = ["Rock", "Paper", "Scissors"];
    return list[Math.floor(Math.random() * list.length)];
}

// Plays a round and returns based on the computer's chosen symbol the bout's result
function playRound(e) {
    if (compCounter !== 3 && playerCounter !== 3 && roundCanStart) {
        let computerSelection = computerSelects();
        roundCanStart = false; // Prevents input during the current round till its end
        userTkn.innerHTML = "";
        compTkn.innerHTML = "";
        removeClasses();
        // User has chosen ROCK
        if (e.target.dataset.title.match(regExList[0])) {
            userTkn.appendChild(faRock.setEl());
            setTimeout(() => {
                compTkn.innerHTML = "";
                if (computerSelection === "Scissors") {
                    compTkn.appendChild(faScissors.setEl());
                    toggleClasses();
                    playerCounter++;
                } else if (computerSelection === "Paper") {
                    compTkn.appendChild(faPaper.setEl());
                    compCounter++;
                    toggleClasses();
                } else {
                    compTkn.appendChild(faRock.setEl());
                    toggleDraw();
                }
                roundCanStart = true;
            }, 3000);
            compTkn.appendChild(faThree.setEl())
            setTimeout(() => {
                compTkn.innerHTML = "";
                compTkn.appendChild(faTwo.setEl());
            }, 1000);
            setTimeout(() => {
                compTkn.innerHTML = "";
                compTkn.appendChild(faOne.setEl());
            }, 2000);
        // User has chosen PAPER
        } else if (e.target.dataset.title.match(regExList[1])) {
            userTkn.appendChild(faPaper.setEl());
            if (!userTkn.hasChildNodes()) userTkn.appendChild(faPaper.setEl());
            setTimeout(() => {
                compTkn.innerHTML = "";
                if (computerSelection === "Scissors") {
                    compTkn.appendChild(faScissors.setEl());
                    compCounter++;
                    toggleClasses();
                } else if (computerSelection === "Rock") {
                    compTkn.appendChild(faRock.setEl());
                    playerCounter++;
                    toggleClasses();
                } else {
                    compTkn.appendChild(faPaper.setEl());
                    toggleDraw();
                }
                roundCanStart = true;
            }, 3000);
            compTkn.appendChild(faThree.setEl())
            setTimeout(() => {
                compTkn.innerHTML = "";
                compTkn.appendChild(faTwo.setEl());
            }, 1000);
            setTimeout(() => {
                compTkn.innerHTML = "";
                compTkn.appendChild(faOne.setEl());
            }, 2000);
        // User has chosen SCISSORS
        } else if (e.target.dataset.title.match(regExList[2])) {
            userTkn.appendChild(faScissors.setEl());
            setTimeout(() => {
                compTkn.innerHTML = "";
                if (computerSelection === "Paper") {
                    compTkn.appendChild(faPaper.setEl());
                    playerCounter++;
                    toggleClasses();
                } else if (computerSelection === "Rock") {
                    compTkn.appendChild(faRock.setEl());
                    compCounter++;
                    toggleClasses();
                } else {
                    compTkn.appendChild(faScissors.setEl());
                    toggleDraw();
                }
                roundCanStart = true;
            }, 3000);
            compTkn.appendChild(faThree.setEl())
            setTimeout(() => {
                compTkn.innerHTML = "";
                compTkn.appendChild(faTwo.setEl());
            }, 1000);
            setTimeout(() => {
                compTkn.innerHTML = "";
                compTkn.appendChild(faOne.setEl());
            }, 2000);
        }
    } else {
        if (compCounter === 3) {
            // losing animation for the user
            playerCounter = 0;
            compCounter = 0;
        } else {
            // winning animation for the user
            playerCounter = 0;
            compCounter = 0;
        }
        roundCanStart = true;
    }

}
// Assigning event handlers

scissorsBtn.addEventListener("click", playRound);
rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);

