const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choicebtn = document.querySelectorAll(".choicebtn");

let player;
let computer;
let result;

choicebtn.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = ` Player : ${player}`;
    computerText.textContent = ` computer : ${computer}`;
    resultText.textContent = checkWinner();
  }),
);
function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSOR";
      break;
  }
}
function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "You Winn!" : "You Lose!";
  } else if (computer == "PAPER") {
    return player == "SCISSOR" ? "You Winn!" : "You Winn!";
  } else if (computer == "PAPER") {
    return player == "ROCK" ? "You Winn!" : "You Lose!";
  }
}
