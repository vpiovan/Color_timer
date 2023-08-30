// ********************************************************************************************* VARIABLE(S)

const colors = ["blue", "yellow", "red", "white"];
const background = document.getElementById("background");
/*const pauseButton = document.getElementById("pauseButton");*/
/*const resetButton = document.getElementById("resetButton");*/
const timer = document.getElementById("timer");

let currentIndex = 0;
let previousIndex = -1;
let timerInterval;
let timerValue = 5.0;

// *********************************************************************************** RANDOM COLOR FUNCTION

function getRandomColorIndex() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * colors.length);
  } while (newIndex === previousIndex);
  previousIndex = newIndex;
  return newIndex;
}

function changeBackgroundColor() {
  currentIndex = getRandomColorIndex();
  background.className = colors[currentIndex];
}

// *********************************************************************************** UPDATE TIMER FUNCTION

function updateTimer() {
  /*timerValue = Math.max(0, timerValue - 1);*/
  timerValue = timerValue - 1;
  /*timer.textContent = timerValue.toFixed(2) + "s";*/

  if (timerValue <= 0.00) {
    changeBackgroundColor();
    timerValue = 5.0;
  }
  timer.textContent = timerValue.toFixed(2) + "s";
}

// ************************************************************************************ PAUSE TIMER FUNCTION

function togglePause() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  /*pauseButton.textContent = "Play";*/
  } else {
    timerInterval = setInterval(updateTimer, 1000);
/*    pauseButton.textContent = "Pause";*/
  }
}

// ************************************************************************************ RESET TIMER FUNCTION

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerValue = 5.0;
  timer.textContent = timerValue.toFixed(2) + "s";
  changeBackgroundColor();
/*  pauseButton.textContent = "Play";*/
}

// ****************************************************************************************** EVENT LISTENER

background.addEventListener("click", changeBackgroundColor);
/*pauseButton.addEventListener("click", togglePause);*/
/*resetButton.addEventListener("click", resetTimer);*/

changeBackgroundColor();
togglePause();
