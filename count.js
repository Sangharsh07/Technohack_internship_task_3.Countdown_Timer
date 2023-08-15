let intervalId;
let remainingTime = 0;
let isRunning = false;

function updateTimerDisplay() {
  const hours = Math.floor(remainingTime / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((remainingTime % 3600) / 60).toString().padStart(2, '0');
  const seconds = (remainingTime % 60).toString().padStart(2, '0');

  document.getElementsByClassName('time_entity')[0].textContent = hours;
  document.getElementsByClassName('time_entity')[1].textContent = minutes;
  document.getElementsByClassName('time_entity')[2].textContent = seconds;
}

function startTimer() {
  if (!isRunning && remainingTime > 0) {
    isRunning = true;
    intervalId = setInterval(() => {
      if (remainingTime > 0) {
        remainingTime--;
        updateTimerDisplay();
      } else {
        clearInterval(intervalId);
        isRunning = false;
        alert("Time's up!");
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(intervalId);
  isRunning = false;
}

function resetTimer() {
  stopTimer();
  remainingTime = 0;
  updateTimerDisplay();
}

function setTimer() {
  const setTimeInput = document.getElementById('set-time').value;
  const timeComponents = setTimeInput.split(':');
  const hours = parseInt(timeComponents[0]) || 0;
  const minutes = parseInt(timeComponents[1]) || 0;
  const seconds = parseInt(timeComponents[2]) || 0;

  remainingTime = (hours * 3600) + (minutes * 60) + seconds;
  updateTimerDisplay();
}

window.onload = function() {
  updateTimerDisplay();
};
