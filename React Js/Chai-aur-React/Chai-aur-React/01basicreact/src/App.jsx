import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  function incCounter() {
    if (counter < 20) {
      setCounter(++counter);
    }
  }
  function decCounter() {
    if (counter > 0) {
      setCounter(--counter);
    }
  }
  return (
    <>
      <h1>Counter is {counter}</h1>
      <button onClick={incCounter}>Increase Counter {counter}</button>
      <br /><br />
      <button onClick={decCounter}>Decrease Counter {counter}</button>
    </>
  );
}

export default App;
