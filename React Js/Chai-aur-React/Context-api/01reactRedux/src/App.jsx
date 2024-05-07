import "./index.css";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";

function App() {
  return (
    <>
      <div className="w-8/12 m-auto flex justify-center items-center flex-col">
        <h1>Learn about redux toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
