import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [copyButton, setCopyButton] = useState("Copy");
  const [length, setLength] = useState(6);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("Password");

  const passwordRef = useRef(null);

  function copyPasswordHandler() {
    setCopyButton("Copied!");
    setTimeout(() => {
      setCopyButton("Copy");
    }, 3000);

    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumberAllowed) str += "0123456789";
    if (isCharacterAllowed) str += "#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [isNumberAllowed, isCharacterAllowed, length, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [isNumberAllowed, isCharacterAllowed, length, generatePassword]);

  return (
    <>
      <div className="w-full flex justify-center items-center flex-col mt-10 rounded-lg px-4 py-3 my-8 bg-gray-800">
        <div className="bg-white h-12 w-10/12 flex overflow-hidden my-7 rounded-md">
          <input
            placeholder="Password"
            type="text"
            className="w-10/12 h-full
            text-black px-8 flex justify-start
            items-center"
            readOnly
            ref={passwordRef}
            value={password}
          />
          <button
            className="w-2/12 bg-blue-600 h-full hover:bg-blue-700 font-bold"
            onClick={copyPasswordHandler}
          >
            {copyButton}
          </button>
        </div>
        <div className="mb-2 flex justify-center items-center gap-2">
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
          <label className="font-bold w-24">Length: {length}</label>
          <input
            onChange={() => setIsNumberAllowed(!isNumberAllowed)}
            defaultChecked={isNumberAllowed}
            type="checkbox"
            className="border-none ml-8"
          />
          <label className="font-bold">Number</label>
          <input
            onChange={() => setIsCharacterAllowed(!isCharacterAllowed)}
            defaultChecked={isCharacterAllowed}
            type="checkbox"
            className="border-none ml-8"
          />
          <label className="font-bold">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
