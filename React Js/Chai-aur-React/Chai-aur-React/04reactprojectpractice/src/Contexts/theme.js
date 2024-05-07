import { createContext, useContext } from "react";

export const themeContext = createContext({
    themeMode: 'light',
    lightTheme: ()=>{},
    darkTheme: ()=>{}
})

export default function useTheme(){
    return useContext(themeContext)
}