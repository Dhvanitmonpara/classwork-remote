import { useState } from "react";
import "./index.css";
import InputField from "./Components/InputField";
import InputBtn from "./Components/InputBtn";

function App() {
  const [value, setValue] = useState(null);
  const [calculation, setCalculation] = useState("");

  const operations = [
    "AC",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <>
      <div style={{width: '360px', height:'612px'}} className="flex justify-center items-center flex-col gap-4 bg-slate-800 rounded-2xl">
        <InputField value={value} calculation={calculation} setCalculation={setCalculation} />
        <div className="grid gap-4 grid-cols-4 grid-rows-5">
          {operations.map((operation) => (
            <InputBtn
              key={operation}
              setValue={setValue}
              btnValue={operation}
              keyboardShortcut={operation}
              height={70}
              width={operation === "0" ? '100%' : 70}
              gridExpend={operation === "0" ? true : false}
              setCalculation={setCalculation}
              calculation={calculation}
            />
          ))}
        </div>
      </div>
    </>
  );
  
}

export default App;
