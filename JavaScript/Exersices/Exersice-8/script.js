const customMsgCon = document.getElementById("custom-msg-con");
const customMsgCheck = document.getElementById("custom-msg-check");

function toggleCustomMsg() {
  customMsgCon.classList.toggle("custom-msg-active");
}

customMsgCheck.addEventListener("click", toggleCustomMsg);

// alarm logic

function play() {
  const audio = new Audio("/audio/alarm-ring.mp3");
  audio.play();
}

const startAlarmBtn = document.getElementById("start-alarm");

function startAlarm() {
  let min = document.getElementById("min").innerText;
  let sec = document.getElementById("sec").innerText;

  let totalSec = min * 60 + sec;
  let timerInterval;

  timerInterval = setInterval(() => {
    if (sec === 0) {
      if (min === 0) {
        return;
      }
      min--;
      sec = 59;
    } else {
      sec--;
    }

    if (startAlarmBtn.innerText === "start") {
      clearInterval(timerInterval);
      clearTimeout(timerTimerout);
    }

    document.getElementById("min").innerText = min;
    document.getElementById("sec").innerText = sec;
  }, 1000);

  timerTimerout = setTimeout(() => {
    clearInterval(timerInterval);
    document.getElementById("sec").innerText = 0;
    toggleStarBtn();
    play();
  }, totalSec * 1000);
}

function toggleStarBtn() {
  if (startAlarmBtn.innerText == "start") {
    startAlarmBtn.innerText = "stop";
    startAlarm();
  } else {
    startAlarmBtn.innerText = "start";
  }
}

startAlarmBtn.addEventListener("click", toggleStarBtn);

// input alarm

const setAlarmCon = document.getElementById("set-alarm-con");
const setAlarm = document.getElementById("set-alarm");
const setAlarmBtn = document.getElementById("set-alarm-btn");

function toggleSetAlarm() {
  setAlarmCon.classList.toggle("custom-msg-active");
}

function setAlarmFunc() {
  let getMin = document.getElementById("get-min").value;
  let getSec = document.getElementById("get-sec").value;

  document.getElementById("min").innerText = getMin;
  document.getElementById("sec").innerText = getSec;

  toggleSetAlarm();
}

function startAlarmFunc() {
  setAlarmFunc();
  toggleStarBtn()
}

setAlarm.addEventListener("click", startAlarmFunc);
setAlarmBtn.addEventListener("click", setAlarmFunc);
