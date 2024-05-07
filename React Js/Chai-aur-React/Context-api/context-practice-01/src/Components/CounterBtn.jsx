import React from "react";
import useCounter from "../Contexts/Counter";

const CounterBtn = () => {
  const { name } = useCounter();

  return (
    <div>
      <button>Increment {name}</button>
      <button>Decrement</button>
    </div>
  );
};

export default CounterBtn;
