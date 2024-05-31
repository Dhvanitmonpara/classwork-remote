import React, { useEffect } from "react";

const InputField = ({ value, calculation, setCalculation }) => {

  useEffect(() => {
    if (value !== null && value !== undefined) {
      setCalculation((state) => state + value);
    }
  }, [value]);

  return (
    <div
      style={{ width: "328px", height: "150px" }}
      className="bg-slate-800 rounded-lg text-white flex justify-end items-end"
    >
      <p className="h-16 text-5xl mb-5 font-semibold overflow-scroll">
        {calculation ? calculation : "0"}
      </p>
    </div>
  );
};

export default InputField;
