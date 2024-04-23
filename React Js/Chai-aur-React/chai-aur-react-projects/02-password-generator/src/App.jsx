import { useState, useRef } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";

function App() {
  const [length, setLength] = useState("8");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copyBtn, setCopyBtn] = useState("Copy");

  // ref hook
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const copyBtnFunc = () => {
    copyPasswordToClipboard();
    setCopyBtn("Copied!");

    setTimeout(() => {
      setCopyBtn("Copy");
    }, 3000);
  };

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*{}[]~`-+=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    console.log(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="bg-zinc-800 h-40 w-5/6 rounded-3xl flex justify-center items-center flex-col">
          <div className="flex justify-center items-center h-2/6 w-5/6 rounded-2xl overflow-hidden">
            <input
              type="text"
              value={password}
              className="w-5/6 h-full py-2 px-8"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button
              className="bg-blue-700 text-white h-full w-1/6 font-semibold hover:bg-blue-800"
              onClick={copyBtnFunc}
            >
              {copyBtn}
            </button>
          </div>
          <div className="flex text-lg mt-6 gap-x-2 text-green-400 font-bold">
            <div className="flex items-center gap-x-4">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="w-36">Length: {length}</label>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label className="mr-12" htmlFor="numberInput">Numbers</label>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charInput">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
