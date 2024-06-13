import { useEffect } from "react";
import "./App.css";
import Todos from "./Components/Todos";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector(state => state.todos)
  useEffect(() => {
    if (localStorage.getItem("TodoLists")) {
      localStorage.setItem("TodoLists", JSON.stringify(todos));
    } else {
      localStorage.setItem("TodoLists", JSON.stringify([]));
    }
  }, [todos]);
  return (
    <>
      <Todos />
    </>
  );
}

export default App;
