// STOPWATCH ONE

const stopwatch_1 = document.getElementById("stopwatch_1");
const stopButton_1 = document.getElementById("stop_1");
const playPauseButton_1 = document.getElementById("play-pause_1");
const secondsSphere_1 = document.getElementById("seconds-sphere_1");

let stopwatchInterval_1;
let runningTime_1 = 0;

playPauseButton_1.addEventListener("click", playPauseOne);
stopButton_1.addEventListener("click", stopOne);

function playPauseOne() {
  const isPaused = !playPauseButton_1.classList.contains("running");

  if (isPaused) {
    playPauseButton_1.classList.add("running");
    startOne();
  } else {
    playPauseButton_1.classList.remove("running");
    pauseOne();
  }
}

function pauseOne() {
  secondsSphere_1.style.animationPlayState = "paused";
  clearInterval(stopwatchInterval_1);
}

function stopOne() {
  secondsSphere_1.style.transform = "rotate(-90deg) translateX(60px)";
  secondsSphere_1.style.animation = "none";

  playPauseButton_1.classList.remove("running");
  runningTime_1 = 0;
  clearInterval(stopwatchInterval_1);
  stopwatch_1.textContent = "00:00";
}

function startOne() {
  secondsSphere_1.style.animation = "rotacion 60s linear infinite";
  secondsSphere_1.style.animationPlayState = "running";

  let startTime = Date.now() - runningTime_1;

  stopwatchInterval_1 = setInterval(() => {
    runningTime_1 = Date.now() - startTime;
    stopwatch_1.textContent = calculateTimeOne(runningTime_1);
  }, 1000);
}

function calculateTimeOne(runningTime_1) {
  const total_seconds = Math.floor(runningTime_1 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

// STOPWATCH TWO

const stopwatch_2 = document.getElementById("stopwatch_2");
const stopButton_2 = document.getElementById("stop_2");
const playPauseButton_2 = document.getElementById("play-pause_2");
const secondsSphere_2 = document.getElementById("seconds-sphere_2");

let stopwatchInterval_2;
let runningTime_2 = 0;

playPauseButton_2.addEventListener("click", playPauseTwo);
stopButton_2.addEventListener("click", stopTwo);

function playPauseTwo() {
  const isPaused = !playPauseButton_2.classList.contains("running");

  if (isPaused) {
    playPauseButton_2.classList.add("running");
    startTwo();
  } else {
    playPauseButton_2.classList.remove("running");
    pauseTwo();
  }
}

function pauseTwo() {
  secondsSphere_2.style.animationPlayState = "paused";
  clearInterval(stopwatchInterval_2);
}

function stopTwo() {
  secondsSphere_2.style.transform = "rotate(-90deg) translateX(60px)";
  secondsSphere_2.style.animation = "none";

  playPauseButton_2.classList.remove("running");
  runningTime_2 = 0;
  clearInterval(stopwatchInterval_2);
  stopwatch_2.textContent = "00:00";
}

function startTwo() {
  secondsSphere_2.style.animation = "rotacion 60s linear infinite";
  secondsSphere_2.style.animationPlayState = "running";

  let startTime = Date.now() - runningTime_2;

  stopwatchInterval_2 = setInterval(() => {
    runningTime_2 = Date.now() - startTime;
    stopwatch_2.textContent = calculateTimeTwo(runningTime_2);
  }, 1000);
}

function calculateTimeTwo(runningTime_2) {
  const total_seconds = Math.floor(runningTime_2 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

// STOPWATCH THREE

const stopwatch_3 = document.getElementById("stopwatch_3");
const stopButton_3 = document.getElementById("stop_3");
const playPauseButton_3 = document.getElementById("play-pause_3");
const secondsSphere_3 = document.getElementById("seconds-sphere_3");

let stopwatchInterval_3;
let runningTime_3 = 0;

playPauseButton_3.addEventListener("click", playPauseThree);
stopButton_3.addEventListener("click", stopThree);

function playPauseThree() {
  const isPaused = !playPauseButton_3.classList.contains("running");

  if (isPaused) {
    playPauseButton_3.classList.add("running");
    startThree();
  } else {
    playPauseButton_3.classList.remove("running");
    pauseThree();
  }
}

function pauseThree() {
  secondsSphere_3.style.animationPlayState = "paused";
  clearInterval(stopwatchInterval_3);
}

function stopThree() {
  secondsSphere_3.style.transform = "rotate(-90deg) translateX(60px)";
  secondsSphere_3.style.animation = "none";

  playPauseButton_3.classList.remove("running");
  runningTime_3 = 0;
  clearInterval(stopwatchInterval_3);
  stopwatch_3.textContent = "00:00";
}

function startThree() {
  secondsSphere_3.style.animation = "rotacion 60s linear infinite";
  secondsSphere_3.style.animationPlayState = "running";

  let startTime = Date.now() - runningTime_3;

  stopwatchInterval_3 = setInterval(() => {
    runningTime_3 = Date.now() - startTime;
    stopwatch_3.textContent = calculateTimeOne(runningTime_3);
  }, 1000);
}

function calculateTimeThree(runningTime_3) {
  const total_seconds = Math.floor(runningTime_3 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

// STOPWATCH FOUR

const stopwatch_4 = document.getElementById("stopwatch_4");
const stopButton_4 = document.getElementById("stop_4");
const playPauseButton_4 = document.getElementById("play-pause_4");
const secondsSphere_4 = document.getElementById("seconds-sphere_4");

let stopwatchInterval_4;
let runningTime_4 = 0;

playPauseButton_4.addEventListener("click", playPauseFour);
stopButton_4.addEventListener("click", stopFour);

function playPauseFour() {
  const isPaused = !playPauseButton_4.classList.contains("running");

  if (isPaused) {
    playPauseButton_4.classList.add("running");
    startFour();
  } else {
    playPauseButton_4.classList.remove("running");
    pauseFour();
  }
}

function pauseFour() {
  secondsSphere_4.style.animationPlayState = "paused";
  clearInterval(stopwatchInterval_4);
}

function stopFour() {
  secondsSphere_4.style.transform = "rotate(-90deg) translateX(60px)";
  secondsSphere_4.style.animation = "none";

  playPauseButton_4.classList.remove("running");
  runningTime_4 = 0;
  clearInterval(stopwatchInterval_4);
  stopwatch_4.textContent = "00:00";
}

function startFour() {
  secondsSphere_4.style.animation = "rotacion 60s linear infinite";
  secondsSphere_4.style.animationPlayState = "running";

  let startTime = Date.now() - runningTime_4;

  stopwatchInterval_4 = setInterval(() => {
    runningTime_4 = Date.now() - startTime;
    stopwatch_4.textContent = calculateTimeFour(runningTime_4);
  }, 1000);
}

function calculateTimeFour(runningTime_4) {
  const total_seconds = Math.floor(runningTime_4 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}

// STOPWATCH FIVE

const stopwatch_5 = document.getElementById("stopwatch_5");
const stopButton_5 = document.getElementById("stop_5");
const playPauseButton_5 = document.getElementById("play-pause_5");
const secondsSphere_5 = document.getElementById("seconds-sphere_5");

let stopwatchInterval_5;
let runningTime_5 = 0;

playPauseButton_5.addEventListener("click", playPauseFive);
stopButton_5.addEventListener("click", stopFive);

function playPauseFive() {
  const isPaused = !playPauseButton_5.classList.contains("running");

  if (isPaused) {
    playPauseButton_5.classList.add("running");
    startFive();
  } else {
    playPauseButton_5.classList.remove("running");
    pauseFive();
  }
}

function pauseFive() {
  secondsSphere_5.style.animationPlayState = "paused";
  clearInterval(stopwatchInterval_5);
}

function stopFive() {
  secondsSphere_5.style.transform = "rotate(-90deg) translateX(60px)";
  secondsSphere_5.style.animation = "none";

  playPauseButton_5.classList.remove("running");
  runningTime_5 = 0;
  clearInterval(stopwatchInterval_5);
  stopwatch_5.textContent = "00:00";
}

function startFive() {
  secondsSphere_5.style.animation = "rotacion 60s linear infinite";
  secondsSphere_5.style.animationPlayState = "running";

  let startTime = Date.now() - runningTime_5;

  stopwatchInterval_5 = setInterval(() => {
    runningTime_5 = Date.now() - startTime;
    stopwatch_5.textContent = calculateTimeOne(runningTime_5);
  }, 1000);
}

function calculateTimeFive(runningTime_5) {
  const total_seconds = Math.floor(runningTime_5 / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");

  return `${display_minutes}:${display_seconds}`;
}
