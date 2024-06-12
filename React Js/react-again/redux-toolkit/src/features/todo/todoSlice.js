import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [{
            id: 1,
            text: "Hello, world!",
        }]
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(eachTodo => eachTodo.id == action.payload.id ? { ...eachTodo, text: action.payload.text } : eachTodo)
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer

// this is todoReducer naming convention is occurred bcz of default export
//  or simply think this as export const todoReducer = todoSlice.reducer
