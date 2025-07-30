import { useEffect } from "react";
import "./App.css";
import Todos from "./Components/Todos";
import { useSelector } from "react-redux";
import AddTodo from "./Components/AddTodo";

function App() {
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    if (localStorage.getItem("TodoLists")) {
      localStorage.setItem("TodoLists", JSON.stringify(todos));
    } else {
      localStorage.setItem("TodoLists", JSON.stringify([]));
    }
  }, [todos]);
  return (
    <>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
