import React, { useState, useRef } from "react";

function OtpComp({ length = 4 }) {
  const [values, setValues] = useState([...Array(length).fill("")]);
  const inputRefs = useRef([...Array(length)].map(() => React.createRef()));

  const handler = (e, index) => {
    const newVal = e.target.value;
    const temp = [...values]; // immutability fix
    temp[index] = newVal;
    setValues(temp);

    // Move focus to the next input if current value is not empty
    if (newVal !== "" && index < length - 1) {
      inputRefs.current[index + 1].current.focus();
    } else if (newVal === "" && index > 0) {
      // Move focus to previous input if value is empty
      inputRefs.current[index - 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault(); // Prevent default paste action
    const pastedText = e.clipboardData.getData("Text"); // Get pasted text
    const otp = pastedText.slice(0, length).split(""); // Slice to desired length and split into an array

    // Update the state with the pasted values
    setValues((prevValues) => {
      return otp.map((digit, index) => (prevValues[index] = digit));
    });

    // Focus on the next input field after pasting
    if (otp.length > 0) {
      inputRefs.current[otp.length - 1].current.focus();
    }
  };

  return (
    <div>
      {values.map((val, index) => (
        <input
          style={{
            fontSize: 30,
            width: 50,
            height: 50,
            textAlign: "center",
          }}
          id={index}
          key={index}
          ref={inputRefs.current[index]}
          onChange={(e) => handler(e, index)}
          value={val}
          autoFocus={index === 0}
          maxLength={1}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && val === "") {
              if (index > 0) {
                inputRefs.current[index - 1].current.focus();
              }
            }
          }}
          onPaste={handlePaste}
        />
      ))}
    </div>
  );
}

export default OtpComp;
