const copyText = document.getElementById("copy-img");
const generatedPass = document.getElementById("pass-gen");
const copyTextMsg = document.getElementById("copy-msg");
const alertMsg = document.getElementById("alert-msg");

function copyTextFunc() {
  let textContent = generatedPass.innerText;
  navigator.clipboard.writeText(textContent);

  copyTextMsg.innerText = "Text copied!";
  setTimeout(() => {
    copyTextMsg.innerText = "";
  }, 3000);
}

copyText.addEventListener("click", copyTextFunc);

const lowecasePass = document.getElementById("lowercase-pass");
const uppercasePass = document.getElementById("uppercase-pass");
const numberPass = document.getElementById("number-pass");
const specialCharacterPass = document.getElementById("special-character-pass");
const funnyPass = document.getElementById("funny-pass");
const passGen = document.getElementById("pass-gen");

function checkValue(elem) {
  if (elem.checked) {
    return true;
  } else {
    return false;
  }
}

function generatPassword() {
  let lengthPass = document.getElementById("length-pass").value;
  let isLowercasePass = checkValue(lowecasePass);
  let isUppercasePass = checkValue(uppercasePass);
  let isNumberPass = checkValue(numberPass);
  let isSpecialCharacterPass = checkValue(specialCharacterPass);
  let isFunnyPass = checkValue(funnyPass);

  let lowecaseArray = [
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
  ];
  let uppercaseArray = [
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
    "Z",
  ];
  let numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let specialCharacterArray = ["_", "@", "."];
  const funnyArray = [
    "iamnottellingyou",
    "password",
    "l0lCatsRule",
    "Unic0rnDreamz",
    "BananaPhone",
    "CheeseAndQuackers",
    "PenguinPower",
    "NachoAveragePassword",
    "PotatoPancakes",
    "SillyGoose",
    "TickleMonster",
    "RainbowFart",
    "CouchPotato",
    "TacoTuesday",
    "PajamaParty",
    "SquidCuddles",
    "JellybeanJamboree",
    "SillyBilly",
    "FunkyMonkey",
    "PizzaParty",
    "CheesyGrin",
    "GigglesAndWiggles",
    "WhimsicalWizard",
    "SunnySideUp",
    "BananaSplit",
    "MarshmallowMadness",
    "NoodleNonsense",
    "CouchPotato",
    "TacoTuesday",
    "PajamaParty",
    "SquidCuddles",
    "JellybeanJamboree",
    "SillyBilly",
    "FunkyMonkey",
    "PizzaParty",
    "CheesyGrin",
    "GigglesAndWiggles",
    "WhimsicalWizard",
    "SunnySideUp",
    "BananaSplit",
    "MarshmallowMadness",
    "NoodleNonsense",
    "CandyCrush",
    "FizzyFizz",
    "PicklePals",
    "BubbleTrouble",
    "ScoobyDoo",
    "Snickerdoodle",
    "WackyWombat",
    "ToastyToast",
    "FruitLoop",
    "SpaghettiMonster",
    "CupcakeCarnival",
    "WaffleWonder",
    "SillySausage",
    "TurtleTango",
    "RainbowRascal",
    "CookieCraze",
    "LemonadeLover",
    "SneakySnake",
    "GummyGalore",
    "MuffinMania",
    "JollyJellybean",
    "PeachyKeen",
    "NachoNinja",
    "CherryCherub",
    "DapperDuckling",
    "FluffyFeathers",
    "GigglyGiraffe",
    "HoppyHippo",
    "MerryMermaid",
    "PeppermintPanda",
    "RockinRhino",
    "SillySlug",
    "TangoTiger",
    "ZanyZebra",
    "GoofyGazelle",
    "WhimsyWalrus",
    "ZestyZebra",
  ];

  if (lengthPass == "") {
    lengthPass = 10;
  } else if (lengthPass < 3) {
    alertMsg.innerText = "Password must contain more that 3 letters";
    setTimeout(() => {
      alertMsg.innerText = "";
    }, 5000);
  } else {
    var mergedArray = [];

    if (isLowercasePass) {
      mergedArray = mergedArray.concat(lowecaseArray);
    }

    if (isUppercasePass) {
      mergedArray = mergedArray.concat(uppercaseArray);
    }

    if (isNumberPass) {
      mergedArray = mergedArray.concat(numberArray);
    }

    if (isSpecialCharacterPass) {
      mergedArray = mergedArray.concat(specialCharacterArray);
    }

    if (isFunnyPass) {
      mergedArray = funnyArray;
    }

    let password = "";

    if (isFunnyPass) {
      let funnyPassLength = funnyArray.length;
      let funnyPassIndex = Math.floor(Math.random() * funnyPassLength);
      password = funnyArray[funnyPassIndex];
    } else {
      let arrayLength = mergedArray.length;

      for (let i = 0; i < lengthPass; i++) {
        let garbagePass = Math.floor(Math.random() * arrayLength);
        password += mergedArray[garbagePass];
      }
    }

    passGen.innerText = password;
  }
}

const generatedPassBtn = document.getElementById("gen-btn");
generatedPassBtn.addEventListener("click", generatPassword);
