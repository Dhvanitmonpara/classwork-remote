"use client";
import React, { useState } from "react";

const page = () => {
  const [userName, setUserName] = useState("");

  const usernameHandler = (e) => {
    e.preventDefault();
    console.log(userName);
  };
  return (
    <>
      <form onSubmit={usernameHandler}>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default page;
