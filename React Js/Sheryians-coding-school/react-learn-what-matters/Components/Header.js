"use client"
import React from "react";
import Link  from "next/link"

const Header = (props) => {
  return (
    <>
      <nav className="w-full h-24 bg-green-600 text-white items-center justify-between flex px-24">
        <div className="inline-block">this is {props.count}</div>
          <ul className="flex gap-10">
            <Link href="./" className="inline-block">Home</Link>
            <Link href="./Trends" className="inline-block">Trends</Link>
            <Link href="./About" className="inline-block">About</Link>
          </ul>
      </nav>
    </>
  );
};

export default Header;
