# Steps to use ContextApi

### theme.js
- src/Context/theme.js
1. createContext() with or without default arguments (as a object) and store it in a variable,
2. Create context provider and export it.
3. You can create a custom hook like useTheme() so that you don't need to import useContext() and themeContext (a variable in which, you hold a context using createContext()).

### App.jsx
- src/App.jsx
1. Import themeProvider and wrap up whole app in it, and also pass data using props from it (value={}).
2. Define all functions and variables properly according to their names.

### Components
1. Import custom hook or import useContext() and corresponding context you want to use.
2. visit src/Components/Card.jsx for example.