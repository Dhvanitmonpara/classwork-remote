class PasswordGenerator {
  constructor() {
    this.copyText = document.getElementById("copy-img");
    this.generatedPass = document.getElementById("pass-gen");
    this.copyTextMsg = document.getElementById("copy-msg");
    this.lowecasePass = document.getElementById("lowercase-pass");
    this.uppercasePass = document.getElementById("uppercase-pass");
    this.numberPass = document.getElementById("number-pass");
    this.specialCharacterPass = document.getElementById(
      "special-character-pass"
    );
    this.funnyPass = document.getElementById("funny-pass");
    this.passGen = document.getElementById("pass-gen");
    this.generatedPassBtn = document.getElementById("gen-btn");
    this.alertMsg = document.getElementById("alert-msg");

    this.copyText.addEventListener("click", this.copyTextFunc.bind(this));
    this.generatedPassBtn.addEventListener(
      "click",
      this.generatePassword.bind(this)
    );
  }

  copyTextFunc() {
    const textContent = this.generatedPass.innerText;
    navigator.clipboard.writeText(textContent);

    this.copyTextMsg.innerText = "Text copied!";
    setTimeout(() => {
      this.copyTextMsg.innerText = "";
    }, 3000);
  }

  checkValue(elem) {
    return elem.checked;
  }

  generatePassword() {
    let lengthPass = document.getElementById("length-pass").value;
    const isLowercasePass = this.checkValue(this.lowecasePass);
    const isUppercasePass = this.checkValue(this.uppercasePass);
    const isNumberPass = this.checkValue(this.numberPass);
    const isSpecialCharacterPass = this.checkValue(this.specialCharacterPass);
    const isFunnyPass = this.checkValue(this.funnyPass);

    const lowercaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const specialCharacterArray = ["_", "@", "."];
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
      this.alertMsg.innerText = "Password must contain more that 3 letters";
      setTimeout(() => {
        this.alertMsg.innerText = "";
      }, 5000);
    } else {
      let mergedArray = [];

      if (isLowercasePass) {
        mergedArray = mergedArray.concat(lowercaseArray);
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
        mergedArray = mergedArray.concat(funnyArray);
      }

      let password = "";

      if (isFunnyPass) {
        const funnyPassIndex = Math.floor(Math.random() * funnyArray.length);
        password = funnyArray[funnyPassIndex];
      } else {
        const arrayLength = mergedArray.length;
        for (let i = 0; i < lengthPass; i++) {
          const garbagePass = Math.floor(Math.random() * arrayLength);
          password += mergedArray[garbagePass];
        }
      }

      this.generatedPass.innerText = password;
    }
  }
}

let pass = new PasswordGenerator();
