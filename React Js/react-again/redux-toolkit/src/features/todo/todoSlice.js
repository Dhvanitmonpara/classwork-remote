import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos:
            JSON.parse(localStorage.getItem("TodoLists")) !== null
                ? JSON.parse(localStorage.getItem("TodoLists"))
                : [],
        theme: false,
        edit: false,
        editVal: '',
        editInfo: "",
    },
    reducers: {
        addTodo: (state, action) => {
          const todo = { id: nanoid(), text: action.payload };
          state.todos.push(todo);
        },
        removeTodo: (state, action) => {
          state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
          state.todos = state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, text: action.payload.text }
              : todo
          );
        },
      },
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer

// this is todoReducer naming convention is occurred bcz of default export
//  or simply think this as export const todoReducer = todoSlice.reducer
