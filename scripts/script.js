// Storing elements in variables
const scissorsBtn = document.querySelector("#scissors");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const userTkn = document.querySelector(".user-token");
const compTkn = document.querySelector(".comp-token");
const userTag = document.querySelector(".user-tag");
const compTag = document.querySelector(".comp-tag");
const counterDiv = document.querySelector("#counter");

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
    iEl.classList.add(
      `${this.classStandard}`,
      `${this.classSize}`,
      `${this.specialClass}`
    );
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

function toggleClassesUserWon() {
  userTkn.classList.toggle("winner");
  userTag.classList.toggle("winner");
  compTkn.classList.toggle("loser");
  compTag.classList.toggle("loser");
}

function toggleClassesCompWon() {
  userTkn.classList.toggle("loser");
  userTag.classList.toggle("loser");
  compTkn.classList.toggle("winner");
  compTag.classList.toggle("winner");
}

function toggleDraw() {
  userTkn.classList.toggle("draw");
  compTkn.classList.toggle("draw");
}

function removeClasses() {
  userTkn.classList.remove("winner");
  userTag.classList.remove("winner");
  compTkn.classList.remove("loser");
  compTag.classList.remove("loser");

  userTkn.classList.remove("loser");
  userTag.classList.remove("loser");
  compTkn.classList.remove("winner");
  compTag.classList.remove("winner");
}

// Updates the score
function updateScore() {
  counterDiv.className = "";
  if (playerCounter === 0 ) {
    if (compCounter === 0) {
      counterDiv.classList.add("counter", "counter00");
    } else if (compCounter === 1) {
      counterDiv.classList.add("counter", "counter01");
    } else if (compCounter === 2) {
      counterDiv.classList.add("counter", "counter02");
    } else if (compCounter === 3) {
      counterDiv.classList.add("counter", "counter03");
    }
  } else if (playerCounter === 1) {
    if (compCounter === 0) {
      counterDiv.classList.add("counter", "counter10");
    } else if (compCounter === 1) {
      counterDiv.classList.add("counter", "counter11");
    } else if (compCounter === 2) {
      counterDiv.classList.add("counter", "counter12");
    } else if (compCounter === 3) {
      counterDiv.classList.add("counter", "counter13");
    }
  } else if (playerCounter === 2) {
    if (compCounter === 0) {
      counterDiv.classList.add("counter", "counter20");
    } else if (compCounter === 1) {
      counterDiv.classList.add("counter", "counter21");
    } else if (compCounter === 2) {
      counterDiv.classList.add("counter", "counter22");
    } else if (compCounter === 3) {
      counterDiv.classList.add("counter", "counter23");
    }
  } else if (playerCounter === 3) {
    if (compCounter === 0) {
      counterDiv.classList.add("counter", "counter30");
    } else if (compCounter === 1) {
      counterDiv.classList.add("counter", "counter31");
    } else if (compCounter === 2) {
      counterDiv.classList.add("counter", "counter32");
    }
  }
}

// Preliminary round "lock"
let roundCanStart = true;

// Computer chooses a random token
let regExList = [/rock/gi, /paper/gi, /scissors/gi];
function computerSelects() {
  let list = ["Rock", "Paper", "Scissors"];
  return list[Math.floor(Math.random() * list.length)];
}

// Plays a round and returns based on the computer's chosen symbol the bout's result
function playRound(e) {
  console.log(`SCORES FROM LAST ROUND: User: ${playerCounter} | Computer: ${compCounter}`);
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
          toggleClassesUserWon();
          playerCounter++;
          updateScore();
        } else if (computerSelection === "Paper") {
          compTkn.appendChild(faPaper.setEl());
          toggleClassesCompWon();
          compCounter++;
          updateScore();
        } else {
          compTkn.appendChild(faRock.setEl());
          toggleDraw();
        }
        roundCanStart = true;
      }, 3000);
      // Countdown animation
      compTkn.appendChild(faThree.setEl());
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
          toggleClassesCompWon();
          compCounter++;
          updateScore();
        } else if (computerSelection === "Rock") {
          compTkn.appendChild(faRock.setEl());
          toggleClassesUserWon();
          playerCounter++;
          updateScore();
        } else {
          compTkn.appendChild(faPaper.setEl());
          toggleDraw();
        }
        roundCanStart = true;
      }, 3000);
      // Countdown animation
      compTkn.appendChild(faThree.setEl());
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
          toggleClassesUserWon();
          playerCounter++;
          updateScore();
        } else if (computerSelection === "Rock") {
          compTkn.appendChild(faRock.setEl());
          toggleClassesCompWon();
          compCounter++;
          updateScore();
        } else {
          compTkn.appendChild(faScissors.setEl());
          toggleDraw();
        }
        roundCanStart = true;
      }, 3000);
      // Countdown animation
      compTkn.appendChild(faThree.setEl());
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
      updateScore();
    } else {
      // winning animation for the user
      playerCounter = 0;
      compCounter = 0;
      updateScore();
    }
    roundCanStart = true;
    playRound(e);
  }
}
// Assigning event handlers

scissorsBtn.addEventListener("click", playRound);
rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);