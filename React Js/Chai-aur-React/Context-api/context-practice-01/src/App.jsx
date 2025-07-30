import "./App.css";
import { CounterContext } from "./Contexts/Counter.jsx";
import CounterBtn from "./Components/CounterBtn";

function App() {
  const name = "Dhvanit";
  return (
    <CounterContext.Provider value={{ name }}>
      <CounterBtn />
    </CounterContext.Provider>
  );
}

export default App;
