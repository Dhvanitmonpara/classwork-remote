import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useCallback } from "react";

function App() {
  const [copyBtnText, setCopyBtnText] = useState("Copy");
  const [characterLength, setCharacterLength] = useState(0);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isSymbolAllowed, setIsSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    {
      let pass = "";
      let passRange = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let numberRange = "0123456789";
      let symbolRange = "@#$%^&*";

      if (isNumberAllowed) passRange.concat(numberRange);
      if (isSymbolAllowed) passRange.concat(symbolRange);

      for (let i = 0; i <= characterLength; i++) {
        let char = Math.floor(Math.random() * passRange.length + 1);
        pass += passRange.charAt(char);
      }

      setPassword(pass);
    }
  }, [isNumberAllowed, isSymbolAllowed, characterLength, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [characterLength, isNumberAllowed, isSymbolAllowed, generatePassword]);

  function copyBtnHandler() {
    setCopyBtnText("Copied!");

    setTimeout(() => {
      setCopyBtnText("Copy");
      window.navigator.clipboard.writeText(password);
      passwordRef.current?.select();
    }, 3000);
  }

  return (
    <>
      <div className="bg-slate-950 h-screen w-screen flex justify-center items-center">
        <div className="w-7/12 h-1/5 bg-slate-900 rounded-xl flex flex-col justify-center items-center">
          <div className="rounded-xl overflow-hidden h-16 w-11/12 flex">
            <input
              type="text"
              readOnly
              className="h-16 w-9/12 p-8"
              value={password}
            />
            <button
              className="w-3/12 h-16 bg-blue-600 text-white hover:bg-blue-700"
              onClick={copyBtnHandler}
            >
              {copyBtnText}
            </button>
          </div>
          <div className="flex h-16 w-full px-10 justify-center items-center gap-10">
            <div className="flex justify-center items-center gap-3">
              <input
                type="range"
                min={0}
                max={100}
                name=""
                id=""
                value={characterLength}
                onChange={(e) => setCharacterLength(e.target.value)}
              />
              <label className="text-white w-40" htmlFor="characterRange">
                Character range: {characterLength}
              </label>
            </div>
            <div className="flex justify-center items-center gap-3">
              <input
                type="checkbox"
                name="isNumberAllowed"
                id="isNumberAllowed"
                defaultChecked={isNumberAllowed}
                onChange={(e) => setIsNumberAllowed(!isNumberAllowed)}
              />
              <label htmlFor="isNumberAllowed" className="text-white">
                Number
              </label>
            </div>
            <div className="flex justify-center items-center gap-3">
              <input
                type="checkbox"
                name="isSymbolAllowed"
                id="isSymbolAllowed"
                defaultChecked={isSymbolAllowed}
                onChange={(e) => setIsSymbolAllowed(!isSymbolAllowed)}
              />
              <label htmlFor="isSymbolAllowed" className="text-white">
                Symbol
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
