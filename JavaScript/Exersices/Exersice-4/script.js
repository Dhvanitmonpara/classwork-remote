// Navbar toggle

const goToClock = document.getElementById("goToClock");
const goToTimer = document.getElementById("goToTimer");
const clockPage = document.getElementById("clockPage");
const timerPage = document.getElementById("timerPage");
const goToFunc = () => {
  goToClock.classList.toggle("active");
  goToTimer.classList.toggle("active");
  displayVisibility();
};

const displayVisibility = () => {
  if (goToClock.classList.contains("active")) {
    timerPage.style.display = "none";
    clockPage.style.display = "flex";
  } else {
    clockPage.style.display = "none";
    timerPage.style.display = "flex";
  }
};

goToTimer.addEventListener("click", goToFunc);
goToClock.addEventListener("click", goToFunc);

// clock

const dateRightNow = document.getElementById("dateRightNow");
const timeRightNow = document.getElementById("timeRightNow");

const dateToday = () => {
  let time = new Date();

  let d = time.getDate();
  let m = time.getMonth();
  let M;

  if (m == 1) {
    M = "Jan";
  } else if (m == 2) {
    M = "Feb";
  } else if (m == 3) {
    M = "March";
  } else if (m == 4) {
    M = "April";
  } else if (m == 5) {
    M = "May";
  } else if (m == 6) {
    M = "June";
  } else if (m == 7) {
    M = "July";
  } else if (m == 8) {
    M = "August";
  } else if (m == 9) {
    M = "Sep";
  } else if (m == 10) {
    M = "Oct";
  } else if (m == 11) {
    M = "Nov";
  } else {
    M = "Dec";
  }

  if (d == 1) {
    timeRightNow.innerHTML = `Today is ${d}st ${M}.`;
  } else if (d == 2) {
    timeRightNow.innerHTML = `Today is ${d}nd ${M}.`;
  } else if (d == 3) {
    timeRightNow.innerHTML = `Today is ${d}rd ${M}.`;
  } else {
    timeRightNow.innerHTML = `Today is ${d}th ${M}.`;
  }
};

dateToday();
setInterval(dateToday, 1440000);

setInterval(() => {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

  dateRightNow.innerHTML = `${h}:${m}:${s}`;
}, 1000);

// timer

const timeChangeBtn = document.getElementsByClassName("timeChangeBtn");
const timeDec = document.getElementsByClassName("timeDecrement");
const timeInc = document.getElementsByClassName("timeIncrement");
const startTimer = document.getElementById("startBtn");
// logic
const min = document.getElementById("ongoingMin");
const sec = document.getElementById("ongoingSec");
const incSec = document.getElementById("incrementSec");
const decSec = document.getElementById("decrementSec");
const incMin = document.getElementById("incrementMin");
const decMin = document.getElementById("decrementMin");

let timerMin = 0;
let timerSec = 0;

// functions

let startInterval;

const timerActive = () => {
  startTimer.classList.toggle("activeTimer");

  if (startTimer.classList.contains("activeTimer")) {
    startTimer.innerHTML = "STOP";
    Array.from(timeChangeBtn).forEach((e) => {
      e.style.display = "none";
    });
    startInterval = setInterval(() => {
      timerSec++;
      sec.innerHTML = `${timerSec}`;

      if (timerSec == 60) {
        timerSec = 0;
        timerMin++;
        min.innerHTML = `${timerMin}`;
      }
      console.log("run");
    }, 1000);
  } else {
    Array.from(timeChangeBtn).forEach((e) => {
      startTimer.innerHTML = "START";
      e.style.display = "flex";
      clearInterval(startInterval);
    });
  }
};

startTimer.addEventListener("click", timerActive);

const incSecFunc = () => {
  timerSec++;
  sec.innerHTML = `${timerSec}`;
};
const decSecFunc = () => {
  if (timerSec > 0) {
    timerSec--;
    sec.innerHTML = `${timerSec}`;
  }
};
const incMinFunc = () => {
  timerMin++;
  min.innerHTML = `${timerMin}`;
};
const decMinFunc = () => {
  if (timerMin > 0) {
    timerMin--;
    min.innerHTML = `${timerMin}`;
  }
};

startTimer.addEventListener("click", timerActive);
incSec.addEventListener("click", incSecFunc);
decSec.addEventListener("click", decSecFunc);
incMin.addEventListener("click", incMinFunc);
decMin.addEventListener("click", decMinFunc);
