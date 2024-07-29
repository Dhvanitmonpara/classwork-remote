"use client";
import React, { useState } from "react";
import Link from "next/link"

const Header = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex px-5 h-24 max-w-full bg-green-500 gap-x-24 items-center justify-center">
        <div>Hello world {count}</div>
        <button
          onClick={() => {
            setCount(11);
          }}
        >
          update it
        </button>
        <Link href="About">About</Link>
      </div>
    </>
  );
};

export default Header;
