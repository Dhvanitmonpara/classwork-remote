import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, setEditingValue, setEditingStatus } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEditClick = (todo) => {
    dispatch(setEditingStatus(true))
    dispatch(setEditingValue(todo));
  };

  return (
    <>
      <div className="text-white text-4xl mt-24">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => handleEditClick(todo)}
                className="text-white font-semibold bg-slate-600 border-0 py-1 px-4 focus:outline-none hover:bg-slate-700 rounded text-md"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white font-semibold bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;