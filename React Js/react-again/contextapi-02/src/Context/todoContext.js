import { createContext, useContext } from "react";

const todoContext = createContext({
    todos: [],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todoText) => { },
    toggleCompleted: (id) => { }
})

export const TodoProvider = todoContext.Provider

export const useTodo = () => useContext(todoContext)