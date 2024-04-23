const HG = document.querySelector("#hackingGround");
const userName = prompt("Enter a username:", "unknown");

const count = document.createElement("div");

const sleep = async (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time * 1000);
  });
};

const counting = async (elem) => {
  return new Promise((resolve, reject) => {
    let i = 0;
    const countInterval = setInterval(() => {
      elem.innerHTML = `${i}%`;
      i++;
      if (i == 101) {
        clearInterval(countInterval);
        resolve(true);
      }
    }, 30);
  });
};

const bineryVisuals = async () => {
  return new Promise((resolve, reject) => {
    const binaryAlpha = [
      " ",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      " ",
    ];
    const bineryCon = document.createElement("div");
    HG.appendChild(bineryCon);
    bineryCon.classList.add("bineryObj");
    const bineryInterval = setInterval(() => {
      let bineryNum = 0;
      let bineryIndex;
      for (let i = 0; i < 6000; i++) {
        bineryIndex = Math.floor(Math.random() * 65);
        bineryNum = `${bineryNum}` + `${binaryAlpha[bineryIndex]}`;
      }
      bineryCon.innerHTML = bineryNum;
    }, 30);
    setTimeout(() => {
      clearInterval(bineryInterval);
      resolve(true);
    }, 5000);
  });
};

const msg = [
  "Initiaizing hack tool...",
  "connecting to Instagram server...",
  "connecting to database.meta.34...",
  "connection failed, retrying...",
  "connecting to database.meta.userlist...",
  "connected successfullly",
  "finding username...",
  `username: ${userName}`,
  "Trying brute force... ",
  `234485 combinations tried...`,
  "match not found.",
  "450699 combinations tried...",
  "finally match found.",
  "accessing account... ",
  "account connected successfully.",
  "account Hacked!",
];

const showPercentage = async (msg) => {
  await sleep(2);
  HG.innerHTML = HG.innerHTML + "</br>" + msg;
  HG.appendChild(count);
  await counting(count);
};

const showHack = async (msg) => {
  await sleep(2);
  HG.innerHTML = HG.innerHTML + "</br>" + msg;
};

(async () => {
  for (let i = 0; i < msg.length; i++) {
    if (i === 9 || i === 11) {
      await bineryVisuals();
    } else {
      if (i === 5 || i === 7 || i === 10 || i === 12 || i === 14 || i === 15) {
        await showHack(msg[i]);
      } else {
        await showPercentage(msg[i]);
      }
    }
  }
})();
