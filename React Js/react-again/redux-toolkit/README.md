# Redux-toolkit steps

### Initial setup

- src/app/store.js
1. Import `configureStore` and hold it in a variable which is typically named `store`, And note that `configureStore` is a function.
2. Pass an object with a variable named `reducer`, as an argument in it.

- src/feature/todo/todoSlice.js
1. Import `createSlice` Method and hold it in a variable, Name that variable same as filename.
2. Define an object in `createSlice` function.
3. The object includes name, initialState and reducers, Go to `sec/features/todo/todoSlice.js` for example.
4. Export all reducers and slice(Methods).

- src/app/store.js
1. Assign reducer to the `reducer` variable (if you have more than one reducers then use object).

- src/main.jsx
1. Create a wrapper `Provider`, And pass `store` (arc/app/store.js) as a prop.

### Data usage and Manipulation

- Refer components for example.



## Some short-notes from the comment section

Redux toolkit ki notes
1. Create Store - single source of truth it has configureStore introduce reducer

2. Create Slice(functions) method(createSlice)
Slice has name, initialState, reducers :{key: function}
Access of two things (State, action)
state = state value in the store
action = action.payload
export individual functionality 
export main source export

3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()
- dispatch(addTodo())

4. Take Values - useSelector((state) =>state.todos) state ka access chaiye
variable me values lelo ek baar aagaie uske baad pure JS concept hai 
Note: Todo's Project basic nai hote xD 

Video link is [here](https://www.youtube.com/watch?v=1i04-A7kfFI&ab_channel=ChaiaurCode) or [Piyush gard](https://youtu.be/fxT54eRIsc4?si=2vc5QtUq4qV-xJ-D).
Refer to [Redux-toolkit](https://redux-toolkit.js.org/tutorials/quick-start).