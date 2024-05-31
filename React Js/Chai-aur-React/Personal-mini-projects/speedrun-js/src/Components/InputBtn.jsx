import React from "react";
import { useEffect } from "react";

const InputBtn = ({
  setValue,
  btnValue,
  keyboardShortcut,
  height = 70,
  width = 70,
  gridExpend,
  setCalculation,
  calculation,
}) => {
  function getResult() {
    let calculatedValue = eval(calculation);
    setCalculation(calculatedValue);
  }

  function inputHandler() {
    if (btnValue === "AC" || btnValue === "C") {
      setCalculation("0");
    } else if (btnValue === "=") {
      getResult();
    } else {
      if (calculation === "0") {
        setCalculation("");
        setValue(btnValue);
      } else {
        setValue(btnValue);
      }
    }
  }

  function handleKeyPress(event) {
    if (event.key === "=" || event.key === "Enter") {
      getResult();
    } else if (event.key === keyboardShortcut) {
      inputHandler();
    } else if (event.key === "Escape") {
      setCalculation("0");
    } else if (event.key === "Backspace") {
      preventDefault()
      setCalculation((prevCalculation) => {
        preventDefault();
        return prevCalculation.length > 1 ? prevCalculation.slice(0, -1) : "0";
      });
    }
  }

  window.addEventListener("keydown", handleKeyPress);

  return (
    <button
      onClick={inputHandler}
      style={{ height: `${height}px`, width: `${width}px` }}
      className={`text-black hover:bg-slate-200 active:scale-95 duration-500 font-bold text-2xl bg-white rounded-md ${
        gridExpend ? "col-span-2" : ""
      }`}
    >
      {btnValue}
    </button>
  );
};

export default InputBtn;
