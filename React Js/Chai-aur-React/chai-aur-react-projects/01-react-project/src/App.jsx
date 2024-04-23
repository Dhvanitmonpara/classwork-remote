import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="h-screen w-screen bg-green-400 flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <div className="w-10/12 h-20 bg-white rounded-xl flex justify-evenly items-center">
          <button
            className="my-4 px-4 py-2 rounded-full bg-green-500"
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="my-4 px-4 py-2 rounded-full bg-red-400"
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="my-4 px-4 py-2 rounded-full bg-blue-400"
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="my-4 px-4 py-2 rounded-full bg-gray-400"
            onClick={() => {
              setColor("gray");
            }}
          >
            Gray
          </button>
          <button
            className="my-4 px-4 py-2 rounded-full bg-yellow-400"
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="my-4 px-4 py-2 rounded-full bg-orange-400"
            onClick={() => {
              setColor("orange");
            }}
          >
            Orange
          </button>
          <button
            className="my-4 px-4 py-2 rounded-full bg-purple-400"
            onClick={() => {
              setColor("purple");
            }}
          >
            Purple
          </button>
          <button
            className="my-4 px-4 py-2 rounded-full bg-zinc-800 text-white"
            onClick={() => {
              setColor("black");
            }}
          >
            Zinc
          </button>
          <button
            className="my-4 px-4 py-2 rounded-full bg-white"
            onClick={() => {
              setColor("white");
            }}
          >
            white
          </button>
          <button
            className="my-4 px-4 py-2 rounded-full bg-lime-300"
            onClick={() => {
              setColor("limegreen");
            }}
          >
            Lime
          </button>
          <button
            className="my-4 px-4 py-2 rounded-full bg-teal-300"
            onClick={() => {
              setColor("teal");
            }}
          >
            Teal
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
