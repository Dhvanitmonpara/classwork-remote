import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos:
      JSON.parse(localStorage.getItem("TodoLists")) !== null
        ? JSON.parse(localStorage.getItem("TodoLists"))
        : [],
    editingValue: {},
    editingStatus: false
  },
  reducers: {
    addTodo: (state, action) => {
      if (action.payload) {
        const todo = { id: nanoid(), text: action.payload };
        state.todos.push(todo);
      }
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
    setEditingValue: (state, action) => {
      state.editingValue = action.payload
    },
    setEditingStatus: (state, action) => {
      state.editingStatus = action.payload
    }
  },
})

export const { addTodo, removeTodo, updateTodo, setEditingStatus, setEditingValue } = todoSlice.actions

export default todoSlice.reducer

// this is todoReducer naming convention is occurred bcz of default export
//  or simply think this as export const todoReducer = todoSlice.reducer
