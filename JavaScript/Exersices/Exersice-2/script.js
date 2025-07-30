let userScore = 0;
let botScore = 0;
const userScoreTotal = document.querySelector("#userScoreVal");
const userChoice = document.querySelector("#userOut");
const botScoreTotal = document.querySelector("#botScoreVal");
const botChoice = document.querySelector("#botOut");
const chanceVal = document.querySelector("#chancesVal");
const resultOut = document.querySelector("#resultOut");
var chance = 0;


const playBtn = document.querySelector('#playTheGame')
playBtn.addEventListener('click', ()=>{
    let cpuInput = Math.floor(Math.random() * 3);
    let cpu = ["R", "P", "S"][cpuInput];
    let userInput = prompt("Enter a choice (R/P/S) :", "S");
    let user = userInput.toUpperCase();
  
    const match = (user, cpu) => {
      if (user == cpu) {
        return "NOBODY";
      } else if (user == "R" && cpu == "P") {
        return "CPU";
      } else if (user == "R" && cpu == "S") {
        return "USER";
      } else if (user == "P" && cpu == "R") {
        return "USER";
      } else if (user == "P" && cpu == "S") {
        return "CPU";
      } else if (user == "S" && cpu == "R") {
        return "CPU";
      } else if (user == "S" && cpu == "P") {
        return "USER";
      } else {
        return "Invalid Input!";
      }
    };
  
    let result = match(user, cpu);
    console.log(result);
  
    botChoice.innerHTML = `${cpu}`;
    userChoice.innerHTML = `${user}`;
  
    if (result == "USER") {
      userScore++;
      userScoreTotal.innerHTML = `${userScore}`;
    } else if (result == "CPU") {
      botScore++;
      botScoreTotal.innerHTML = `${botScore}`;
    }
  
    resultOut.innerHTML = `${result} won the match!`;
  
    chanceVal.innerHTML = `${chance - 1}`;
    chance++;
})